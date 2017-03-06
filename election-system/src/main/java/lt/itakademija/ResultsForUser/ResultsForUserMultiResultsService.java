package lt.itakademija.ResultsForUser;

import java.util.HashMap;
import java.util.Map.Entry;

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
    public HashMap<String, Integer> votesForParties(){
        HashMap<String, Integer> partyList = new HashMap<>();
        for(Entry<Integer, Integer> partyRaw: multiCalculationService.multiResultList().entrySet()){
            partyList.put(partiesService.findById(partyRaw.getKey()).getTitle(), partyRaw.getValue());
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
    public HashMap<String, Integer> mandatesForParties(){
        HashMap<String, Integer> partyMandates = new HashMap<>();
        for(Entry<Integer, Integer> partyRaw: multiCalculationService.mandatesByParty().entrySet()){
            partyMandates.put(partiesService.findById(partyRaw.getKey()).getTitle(), partyRaw.getValue());
        }
        return partyMandates;
    }
    
}
