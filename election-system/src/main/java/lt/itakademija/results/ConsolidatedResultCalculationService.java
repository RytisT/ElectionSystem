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
    ResultMultiCalculationService multiService;
    @Autowired
    ResultSingleService singleService;
    @Autowired
    CandidatesService candidateService;

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

    public List<Candidates> getMultiWinnerCandidates() {
        List<Candidates> singleCandidates = getWinningSingleCandidates();
        List<Candidates> multiWinners = new ArrayList<>();
        Map<Integer, Integer> partyResult = multiService.mandatesByParty();
        for (Entry<Integer, Integer> partyMandateCount : partyResult.entrySet()) {
            // candidateService.findByPartyId(partyMandateCount.getKey());
            int numberMandates = partyMandateCount.getValue();
            while (numberMandates != 0) {
                for (Candidates partyCandidates : candidateService.findByPartyId(partyMandateCount.getKey())) {
                    multiWinners.add(partyCandidates);
                    numberMandates--;
                }
            }
        }
        return multiWinners;
    }

}
