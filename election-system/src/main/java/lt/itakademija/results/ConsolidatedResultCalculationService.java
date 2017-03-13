package lt.itakademija.results;

import java.util.ArrayList;
import java.util.HashMap;
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
        return allWinningCandidates;
    }

    /*
     * returns List of candidates that won mandates in proportional system
     */
    public List<Candidates> getMultiWinnerCandidates() {
        int counter=0;
        List<Candidates> singleCandidates = getWinningSingleCandidates();
        List<Candidates> multiWinners = new ArrayList<>();
        Map<Integer, Integer> partyResult = multiService.mandatesByParty();
        for (Entry<Integer, Integer> partyMandateCount : partyResult.entrySet()) {
            int numberMandates = partyMandateCount.getValue();
            for (Candidates partyCandidates : candidateService.findByPartyId(partyMandateCount.getKey())) {
                
                while (numberMandates >= 1) {
                    counter++;
                    Candidates newAlsoPartyCandidate = candidateService.findByPartyAndSeat(partyMandateCount.getKey(),
                            1+counter);
                    Candidates newPartyCandidate = candidateService.findByPartyAndSeat(partyMandateCount.getKey(),
                            partyCandidates.getParty_list_seat() + 1);
                    if (multiWinners.contains(partyCandidates) || singleCandidates.contains(partyCandidates)
                            || multiWinners.contains(newAlsoPartyCandidate)) {
                        multiWinners.add(newPartyCandidate);
                        break;
                    } else {
                        multiWinners.add(newAlsoPartyCandidate);
                        break;
                    }                   
                }
                numberMandates--;
                
            }
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
