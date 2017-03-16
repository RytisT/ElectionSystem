package lt.itakademija.ResultsForUser;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/user/resultsmulti")
public class ResultsForUserMultiResultsController {
    
    @Autowired
    private ResultsForUserMultiResultsService service;
    
    /*
     * Pateikiamas partijų sarašas surikiuotas pagal laimėtų balsų skaičių šalia pateikiant
     * :Laimėtų balsų skaičių
     * Returns Map<Party name, number of votes>
     */
    @GetMapping(value="/votes")
    public HashMap<Integer, Integer> votesForParties(){
        return service.votesForParties();
    }
    /*
     * Procentą laimėtų balsų nuo visų daugiamandatės biuletenių
     * rounded to 2 decimal places
     */
    @GetMapping(value="/percent")
    public HashMap<String, Float> percentForParties(){
        return service.votesForPartiesPercent();
    }
    /*
     * Laimėtų mandatų skaičių
     */
    @GetMapping(value="/mandates")
    public void mandatesForParties(){
        service.mandatesForParties();
    }
}
