package lt.itakademija.results;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.itakademija.database.models.Candidates;
import lt.itakademija.database.services.CandidatesService;

@Service
public class ConsolidatedResultCalculationService {

    @Autowired
    private ResultMultiCalculationService multiService;
    @Autowired
    private ResultSingleService singleService;
    @Autowired
    private CandidatesService candidateService;

    /*
     * returns List<Candidates> of single mandates winners
     */
    public List<Candidates> getWinningSingleCandidates() {
        List<Candidates> allCandidates = candidateService.findAll();
        Map<Integer, Integer> mandatesResults = singleService.singleWinners();
        List<Candidates> allWinningCandidates = new ArrayList<>();
        // Map<Integer, Integer> mandatesResults = new HashMap<>();
        for (Candidates candidate : allCandidates) {
            for (Integer winnerIds : mandatesResults.keySet()) {
                if (candidate.getId().equals(winnerIds)) {
                    allWinningCandidates.add(candidate);
                }
            }
        }

        for (Candidates candidate : allWinningCandidates) {
            candidate.setCandidate_elected("single");
            candidateService.saveOrUpdate(candidate);
        }
        return allWinningCandidates;
    }

    /*
     * returns List of candidates that won mandates in proportional system
     */
    public List<Candidates> getMultiWinnerCandidates() {
        List<Candidates> singleCandidates = getWinningSingleCandidates();
        List<Candidates> multiWinners = new ArrayList<>();
        Map<Integer, Integer> partyResult = multiService.mandatesByParty();
        for (Entry<Integer, Integer> partyMandateCount : partyResult.entrySet()) {
            int numberMandates = partyMandateCount.getValue();
            int counter=0;
            for (Candidates partyCandidates : candidateService.findByPartyId(partyMandateCount.getKey())) {                
                while (numberMandates >= 1) {                 
                    Candidates newPartyCandidate = candidateService.findByPartyAndSeat(partyMandateCount.getKey(),
                            counter + 1);
//                    Candidates newAlsoPartyCandidate = candidateService.findByPartyAndSeat(partyMandateCount.getKey(),
//                            counter+2);
                            counter++;                                              
                    if (singleCandidates.contains(newPartyCandidate)) {
                        while(singleCandidates.contains(newPartyCandidate)==false){
                        multiWinners.add(newPartyCandidate);
                        counter++;
                        break;
                        }
                    } else {
                        multiWinners.add(newPartyCandidate);
                        break;
                    }                   
                        
                }
                numberMandates--;
                
            }
        }

        System.out.println(multiWinners.size());

        for (Candidates candidate : multiWinners) {
            candidate.setCandidate_elected("multi");
            candidateService.saveOrUpdate(candidate);
        }
        return multiWinners;
    }


    /*
     * returns list of winning candidates from both single and multi mandate
     * systems
     */


    public List<Candidates> consolidatedWinner() {
        List<Candidates> winnersFinal = new ArrayList<>();
        winnersFinal.addAll(getWinningSingleCandidates());
        winnersFinal.addAll(getMultiWinnerCandidates());
        return winnersFinal;
    }


}
