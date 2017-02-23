package lt.itakademija.results;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.Candidates;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/calculation")
public class ConsolidatedResultCalculationController {

    @Autowired
    ConsolidatedResultCalculationService consolidateResult;
    
    @GetMapping
    public List<Candidates> getResults(){
        return consolidateResult.consolidatedWinner();
    }
    
}
