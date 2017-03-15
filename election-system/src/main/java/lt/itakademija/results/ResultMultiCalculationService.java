package lt.itakademija.results;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.itakademija.database.models.Constituency;
import lt.itakademija.database.models.Districts;
import lt.itakademija.database.models.Multi_Results;
import lt.itakademija.database.repositories.Constituencies;
import lt.itakademija.database.repositories.DistrictsRepository;

@Service
public class ResultMultiCalculationService {

    @Autowired
    private Constituencies constituenciesRep;
    @Autowired
    private DistrictsRepository distrep;

    private Float validThreshold = 5f;
    private int numberOfSeats =70;

    /*
     * Returns map<party id, number of votes for party> for all constituencies
     */
    public Map<Integer, Integer> multiResultList() {
        Map<Integer, Integer> partyResults = new HashMap<>();
        for (Constituency constituency : constituenciesRep.findAll()) {
            for (Districts districts : distrep.findByConstituencies(constituency.getId())) {
                for (Multi_Results results : districts.getMulti_results()) {
                    if (partyResults.containsKey(results.getParty_id())) {
                        partyResults.put(results.getParty_id(),
                                partyResults.get(results.getParty_id()) + results.getM_votes());
                    } else {
                        partyResults.put(results.getParty_id(), results.getM_votes());
                    } // else
                } // for
            } // for
        } // for
        return partyResults;
    }

    /*
     * Returns Integer - sum of all party votes
     */
    public Integer allVotes() {
        int allResults = 0;
        for (Integer results : multiResultList().values()) {
            allResults += results;
        }
        return allResults;
    }
    /*
     * returns integer - sum of all possible voters
     */
    public Integer allVotersPossible(){
        long allPossible = 0;
        for(Districts voters : distrep.findAll()){
            allPossible += voters.getNumber_of_voters();
        }
        return (int) allPossible;
    }
    /*
     * returns map<party ID, percent of total votes cast>
     */

    public Map<Integer, Float> percentVotes() {
        Map<Integer, Float> percentMap = new HashMap<>();
        for (Integer results : multiResultList().keySet()) {
            Float percentVotes = (float) multiResultList().get(results) / allVotes() * 100;
            percentMap.put(results, percentVotes);
        }
        return percentMap;
    }
    /*
     * returns Integer of valid votes (votes for parties that passed the
     * threshold)
     */

    public Integer validVotes() {
        Integer validVotes = 0;
        for (Integer results : percentVotes().keySet()) {
            if (percentVotes().get(results) >= validThreshold) {
                validVotes += Math.round(percentVotes().get(results) * allVotes() / 100);
            }
        }
        return validVotes;
    }
    /*
     * returns Map of valid parties that passed threshold Map<party id, 
     * number of votes>
     */

    public Map<Integer, Integer> validParties() {
        Map<Integer, Integer> validParties = new HashMap<>();
        for (Integer results : multiResultList().keySet()) {
            if (percentVotes().get(results) >= validThreshold) {
                validParties.put(results, multiResultList().get(results));
            }
        }
        return validParties;
    }

    /*
     * returns maps<party id, number of mandates in proportional system>
     */
    public Map<Integer, Integer> mandatesByParty() {

        int leftMandates = numberOfSeats;
        Map<Integer, Integer> quotientParty = new HashMap<>();
        //threshold for single mandate
        int mandateByPartyProportional = 0;
        if (allVotes() % numberOfSeats != 0) {
            mandateByPartyProportional = allVotes() / (numberOfSeats) + 1;
        } else {
            mandateByPartyProportional = allVotes() / numberOfSeats;
        }
        // mandates without quotients
        Map<Integer, Integer> mandatesResults = new HashMap<>();
        for (Integer party : validParties().keySet()) {
            mandatesResults.put(party, validParties().get(party) / mandateByPartyProportional);
            quotientParty.put(party, validParties().get(party) % mandateByPartyProportional);
            leftMandates -= validParties().get(party) / mandateByPartyProportional;
        }

        //mandates quotient method, sort by quotient

        Map<Integer, Integer> resultSortedQuotient = new LinkedHashMap<Integer, Integer>();
        Set<Entry<Integer, Integer>> set = quotientParty.entrySet();
        List<Entry<Integer, Integer>> list = new ArrayList<Entry<Integer, Integer>>(set);
        Collections.sort(list, new Comparator<Map.Entry<Integer, Integer>>() {
            @Override
            public int compare(Entry<Integer, Integer> o1, Entry<Integer, Integer> o2) {
                return (o2.getValue()).compareTo(o1.getValue());
            }
        });
        for (Entry<Integer, Integer> entry : list) {
            if (leftMandates != 0) {
                resultSortedQuotient.put(entry.getKey(), entry.getValue());
                mandatesResults.put(entry.getKey(), mandatesResults.get(entry.getKey()) + 1);
                leftMandates--;
            }
        }
        if(mandatesResults.size()!=numberOfSeats){
            mandatesResults.put(1, mandatesResults.get(1) + 1);
        }

        return mandatesResults;
    }

}
