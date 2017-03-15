package lt.itakademija.ResultsForUser;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.itakademija.database.models.Candidates;
import lt.itakademija.database.services.PartiesService;
import lt.itakademija.results.ConsolidatedResultCalculationService;

@Service
public class ResultsForUserConsolidatedResultsService {
    
    @Autowired
    private ConsolidatedResultCalculationService consolidatedService;
    @Autowired
    private PartiesService partiesService;
    private List<Candidates> myCandidates = new ArrayList<>();

    /*
     * Visų būsimų Seimo narių sąrašas
     * returns List<winning candidates>
     */
    public List<Candidates> getwinningCandidates(){
        myCandidates.clear();
        myCandidates = consolidatedService.consolidatedWinner();
        return consolidatedService.consolidatedWinner();
    }
    public List<Candidates> getList(){
        return myCandidates;
    }
    
    /*
     * Partijų sąrašas kartu su kiekvienos partijos laimėtų mandatų skaičiumi 
     * returns Map<Party title, numbers of mandates won>
     */
    public Map<String, Long> mandateCountFull(){
        List<Integer> fullMandateCount = new ArrayList<Integer>();
        Map<String, Long> finalCount = new HashMap<>();
        for(Candidates candidate: consolidatedService.consolidatedWinner()){
            fullMandateCount.add(candidate.getParty_id());            
        }
        Map<Integer, Long> counts = fullMandateCount.stream().collect(Collectors.groupingBy(e -> e, Collectors.counting()));
        for(Map.Entry<Integer, Long> counter : counts.entrySet()){
            finalCount.put(partiesService.findById(counter.getKey()).getTitle(),counter.getValue());
        }
        return finalCount;
    } 
    
    
}
