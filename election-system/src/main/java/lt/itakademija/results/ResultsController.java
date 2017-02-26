package lt.itakademija.results;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/results")
public class ResultsController {

    @Autowired
    private ResultSingleService service;

    @GetMapping
    public Map<Integer, Integer> singleWinnerList() {
        return service.singleWinners();
    }

    @GetMapping(value = "/{id}")
    public Map<Integer, Integer> findByCon(@PathVariable("id") Integer id) {
        return service.winnerCalculationByConstituency(id);
    }


}
