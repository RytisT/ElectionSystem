package lt.itakademija.results;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.Candidates;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/calculation1")
public class ConsolidatedResultCalculationController {

    @Autowired
<<<<<<< HEAD
    private ConsolidatedResultCalculationService consolidateResult;
    
=======
    ConsolidatedResultCalculationService consolidateResult;

>>>>>>> 5829c51f60fd07285bc9c8f2547047d3f62c1f01
    @GetMapping
    public List<Candidates> getResults() {
        return consolidateResult.consolidatedWinner();
    }

}
