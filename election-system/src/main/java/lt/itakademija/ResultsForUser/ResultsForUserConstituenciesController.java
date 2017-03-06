//package lt.itakademija.ResultsForUser;
//
//import java.util.HashMap;
//import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import lt.itakademija.database.models.Constituency;
//
//@RestController
//@CrossOrigin
//@RequestMapping(value = "/api/test1")
//public class ResultsForUserConstituenciesController {
//    
//    @Autowired
//    private ResultsForUserConstituenciesService service;
//    
//    @GetMapping
//    public HashMap<String, HashMap<String, Integer>> constituencyVoterActivity(){
//        return service.constitencyMultiActivity();
//    }
//
//}
