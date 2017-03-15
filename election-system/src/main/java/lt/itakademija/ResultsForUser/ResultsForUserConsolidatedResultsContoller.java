package lt.itakademija.ResultsForUser;

import java.util.List;
import java.util.Map;

import lt.itakademija.results.ConsolidatedResultCalculationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.Candidates;

@RestController
@CrossOrigin
@RequestMapping(value = "/user/consolidated")
public class ResultsForUserConsolidatedResultsContoller {
    
    @Autowired
    private ResultsForUserConsolidatedResultsService service;


    @Autowired
    private ConsolidatedResultCalculationService serviceConsolidated;
    
    /*
     * Visų būsimų Seimo narių sąrašas
     * returns List<winning candidates>
     */
    @GetMapping(value="/candidates")
    public List<Candidates> winerList(){
        return service.winningCandidates();
    }
    
    /*
     * Partijų sąrašas kartu su kiekvienos partijos laimėtų mandatų skaičiumi 
     * returns Map<Party title, numbers of mandates won>
     */
    @GetMapping(value="/mandates")
    public Map<String, Long> mandateCountFull(){
        return service.mandateCountFull();
    }

    /*
    * laimejo vienmadtese
     */
    @GetMapping(value="/single")
    public List<Candidates> getWinningSingleCandidates(){
        return serviceConsolidated.getWinningSingleCandidates();
    }

    /*
     * laimejo daugiamandatese
     */
    @GetMapping(value="/multi")
    public List<Candidates> getMultiWinnerCandidates(){
        return serviceConsolidated.getMultiWinnerCandidates();
    }
}
