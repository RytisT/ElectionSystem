package lt.itakademija.results;

import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.itakademija.database.models.Constituency;
import lt.itakademija.database.models.Districts;
import lt.itakademija.database.models.Single_Results;
import lt.itakademija.database.repositories.Constituencies;
import lt.itakademija.database.repositories.DistrictsRepository;

@Service
public class ResultSingleService {


    @Autowired
    private Constituencies constituenciesRep;
    @Autowired
    private DistrictsRepository distrep;

    /*
     * Takes int constituency ID and returns map<candidate id, number of votes>
     * of all candidates in constituency
     */
    public HashMap<Integer, Integer> votesCalculationByConstituencies(Integer id) {
        HashMap<Integer, Integer> singleWinners = new HashMap<>();
        for (Districts districts : distrep.findByConstituencies(id)) {
            for (Single_Results results : districts.getSingle_results()) {
                if (singleWinners.containsKey(results.getCandidates_id())) {
                    singleWinners.put(results.getCandidates_id(),
                            singleWinners.get(results.getCandidates_id()) + results.getVote());
                } else {
                    singleWinners.put(results.getCandidates_id(), results.getVote());
                }
            }
        }
        return singleWinners;
    }

    /*
     * Takes int constituency ID and returns map<candidate id, number of votes>
     * and returns winning candidate in specific constituency
     */
    public HashMap<Integer, Integer> winnerCalculationByConstituency(Integer id) {

        HashMap<Integer, Integer> singleWinnersList = new HashMap<>();
        HashMap<Integer, Integer> otherMap = new HashMap<>();
        int maxValue = 0;
        singleWinnersList = votesCalculationByConstituencies(id);
        for (Integer value : singleWinnersList.values()) {
            if (value > maxValue) {
                maxValue = value;
            }
        }
        int maxKey = 0;
        for (Integer key : singleWinnersList.keySet()) {
            if (singleWinnersList.get(key).equals(maxValue)) {
                maxKey = key;
            }
        }
        otherMap.put(maxKey, maxValue);
        return otherMap;
    }

    /*
     * Returns map<candidate id, number of votes> of winners of single mandates
     * for all constituencies
     */
    public HashMap<Integer, Integer> singleWinners() {
        HashMap<Integer, Integer> singleWinnersList = new HashMap<>();
        for (Constituency constituency : constituenciesRep.findAll()) {
            singleWinnersList.putAll(winnerCalculationByConstituency(constituency.getId()));
        }
        return singleWinnersList;
    }

}
