
package lt.itakademija.ResultsForUser;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/user/resultsdistricts")
public class ResultsForUserConstituenciesController {
    
    @Autowired
    private ResultsForUserConstituenciesService service;
    
    @GetMapping(value="/activity")
    public Map<Integer, Integer> constituencyVoterActivity(){
        return service.constituencyVoterActivity();
    }
    
    @GetMapping(value="/multi")
    public HashMap<Integer, HashMap<String, Integer>> constitencyMultiActivity(){
        return service.constitencyMultiActivity();
    }
    @GetMapping(value="/multicorrupt")
    public Map<Integer, Integer> constituencyMultiCorruptVotes(){
        return service.constituencyMultiCorruptVotes();
    }

    @GetMapping(value="/single")
    public HashMap<Integer, HashMap<String, Integer>> constitencySingleActivity(){
        return service.constitencySingleActivity();
    }
    @GetMapping(value="/siglecorrupt")
    public Map<Integer, Integer> constituencySingleCorruptVotes(){
        return service.constituencySingleCorruptVotes();
    }
}

