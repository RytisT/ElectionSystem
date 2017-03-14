package lt.itakademija.results;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/multi")
public class ResultMultiCalculationController {

    @Autowired
    private ResultMultiCalculationService multiService;

    @GetMapping
    public Integer allVotes() {
        return multiService.allVotes();
    }

    @GetMapping(value = "/multiResults")
    public Map<Integer, Integer> findByAll() {
        return multiService.mandatesByParty();
    }

    @GetMapping(value = "/percent")
    public Map<Integer, Float> percentVotes() {
        return multiService.percentVotes();
    }

    @GetMapping(value = "/valid")
    public Map<Integer, Integer> validParties() {
        return multiService.mandatesByParty();
    }

}
