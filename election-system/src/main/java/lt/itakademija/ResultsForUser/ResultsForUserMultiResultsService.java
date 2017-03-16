package lt.itakademija.ResultsForUser;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import lt.itakademija.database.models.Parties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.itakademija.database.services.PartiesService;
import lt.itakademija.results.ResultMultiCalculationService;

@Service
public class ResultsForUserMultiResultsService {

    @Autowired
    private  ResultMultiCalculationService multiCalculationService;
    @Autowired
    private PartiesService partiesService;
    
    /*
     * Pateikiamas partijų sarašas surikiuotas pagal laimėtų balsų skaičių šalia pateikiant
     * :Laimėtų balsų skaičių
     * Returns Map<Party name, number of votes>
     */
    public HashMap<Integer, Integer> votesForParties(){
        HashMap<Integer, Integer> partyList = new HashMap<>();
        for(Entry<Integer, Integer> partyRaw: multiCalculationService.multiResultList().entrySet()){
            partyList.put(partiesService.findById(partyRaw.getKey()).getId(), partyRaw.getValue());
        }
        return partyList;
    }
    
    /*
     * Procentą laimėtų balsų nuo visų daugiamandatės biuletenių
     * rounded to 2 decimal places
     */
    
    public HashMap<String, Float> votesForPartiesPercent(){
        HashMap<String, Float> partyListPercent = new HashMap<>();
        for(Entry<Integer, Float> partyRaw: multiCalculationService.percentVotes().entrySet()){
            partyListPercent.put(partiesService.findById(partyRaw.getKey()).getTitle(), 
                    (float) (Math.round(partyRaw.getValue()*100.0)/100.0));
        }
        return partyListPercent;
    }
    
    /*
     * Laimėtų mandatų skaičių
     */
    public void mandatesForParties(){
        HashMap<Integer, Integer> partyMandates = new HashMap<>();
        for(Entry<Integer, Integer> partyRaw: multiCalculationService.mandatesByParty().entrySet()){
            partyMandates.put(partiesService.findById(partyRaw.getKey()).getId(), partyRaw.getValue());
        }

        for (Map.Entry<Integer, Integer> partyMandate: partyMandates.entrySet()){
            Integer id = partyMandate.getKey();
            Integer mandates = partyMandate.getValue();

            Parties party = partiesService.findById(id);
            party.setMandates(mandates);

            partiesService.saveOrUpdate(party);
        }
    }
    
}
