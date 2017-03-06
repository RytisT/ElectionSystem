//package lt.itakademija.ResultsForUser;
//
//import java.util.HashMap;
//import java.util.Map;
//import java.util.Map.Entry;
//import static java.lang.Math.toIntExact;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import lt.itakademija.database.models.Constituency;
//import lt.itakademija.database.models.Districts;
//import lt.itakademija.database.models.Multi_Results;
//import lt.itakademija.database.repositories.DistrictsRepository;
//import lt.itakademija.database.services.ConstituencyService;
//import lt.itakademija.database.services.DistrictsService;
//import lt.itakademija.database.services.Multi_Results_Service;
//import lt.itakademija.database.services.PartiesService;
//import lt.itakademija.results.ResultMultiCalculationService;
//
///*
// * FR6. Rinkiminių apygardų rezultatai
// */
//@Service
//public class ResultsForUserConstituenciesService {
//
//    @Autowired
//    private ResultMultiCalculationService resultMultiCalculationService;
//    @Autowired
//    private ConstituencyService constituencyService;
//    @Autowired
//    private DistrictsRepository distrep;
//    @Autowired
//    private PartiesService partiesService;
//    @Autowired
//    private DistrictsService districtsService;
//    @Autowired
//    private ResultsForUserDistrictsService districtsResultsService;
//
//    /*
//     * Rinkėjų aktyvumas Vienetais returns Map<Constituency name, votes cast>
//     */
//    public Map<String, Integer> constituencyVoterActivity() {
//        Map<String, Integer> constituencyList = new HashMap<>();
//        for (Constituency constituency : constituencyService.findAll()) {
//            for (Districts districts : distrep.findByConstituencies(constituency.getId())) {
//                for (Multi_Results multiResults : districts.getMulti_results()) {
//                    if (constituencyList.containsKey(constituency.getTitle())) {
//                        constituencyList.put(constituency.getTitle(),
//                                constituencyList.get(constituency.getTitle()) + multiResults.getM_votes());
//                    } else {
//                        constituencyList.put(constituency.getTitle(), multiResults.getM_votes());
//                    }
//                }
//            }
//        }
//        return constituencyList;
//    }
//
//    /*
//     * Rinkėjų aktyvumas Procentais nuo visų rinkėjų returns Map<Constituency
//     * name, percent of active voters, round 2 decimal places>
//     */
//    public Map<String, Float> constituencyVoterActivityPercent(){
//        
//        Map<String, Integer> possibleVoters = new HashMap<>();
//        Map<String, Float> percentVotes = new HashMap<>();  
//        for(Constituency constituency : constituencyService.findAll()){
//            Long value = 0l;
//            for(Districts districts: distrep.findAll()){                              
//                if(constituency.getId().equals(districts.getConstituency_id())){
//                    possibleVoters.put(constituency.getTitle(), toIntExact(value+= districts.getNumber_of_voters()));
//                }
//            }
//        }
//        for(Map.Entry<String, Integer> possibleVoter : possibleVoters.entrySet()){
//            for(Map.Entry<String, Integer> allVoter : constituencyVoterActivity().entrySet()){
//                if(possibleVoter.getKey().equals(allVoter.getKey())){
//                    percentVotes.put(possibleVoter.getKey(), (float)Math.round((allVoter.getValue()
//                            /(float)(possibleVoter.getValue())*100)*100)/100);
//                }
//            }
//        }
//        return percentVotes;
//    }
//
//    /*
//     * Balsų skaičių daugiamandatėje Balsų skaičių už kiekvieną sąrašą
//     * returns Map<title of constituency<title of party, number of votes>>
//     */
//    public HashMap<String, HashMap<String, Integer>> constitencyMultiActivity(){
//        HashMap<String, HashMap<String, Integer>> partyActivityMap = new HashMap<>(); 
//        for(Constituency constituency : constituencyService.findAll()){       
//            HashMap<String, Integer> partyList = new HashMap<>();
//            for(Districts districts : distrep.findAll()){                
//                for(Multi_Results multiResults : districts.getMulti_results()){                  
//                    if(districts.getConstituency_id().equals(constituency.getId())){
//                        if(partyList.containsKey(partiesService.findById(multiResults.getParty_id()).getTitle())){
//                            partyList.put(partiesService.findById(multiResults.getParty_id()).getTitle(), 
//                                    partyList.get(partiesService.findById(multiResults.getParty_id()).getTitle()) 
//                                    + multiResults.getM_votes());
//                          }else{
//                              partyList.put(partiesService.findById(multiResults.getParty_id()).getTitle()
//                                      , multiResults.getM_votes());
//                          }
//                    }
//                    partyActivityMap.put(constituency.getTitle(), partyList);
//                }                     
//            }
//        }
//        return partyActivityMap;
//    }
//    /*
//     * Balsų skaičių daugiamandatėje
//     * Balsų skaičių procentais nuo visų biuletenių
//     */
//    public HashMap<String, Integer> constitencyMultiActivityPercent(){
//        HashMap<String, Integer> partyList = new HashMap<>();
//        for(Constituency constituency : constituencyService.findAll()){                 
//            for(Districts districts : distrep.findAll()){                
//                if(districts.getConstituency_id().equals(constituency.getId())){
//                    Integer voteCount = 0;
//                    if(partyList.containsKey(partiesService.findById(multiResults.getParty_id()).getTitle())){
//                        voteCount =+ 1;
//                      }else{
//                          partyList.put(partiesService.findById(multiResults.getParty_id()).getTitle()
//                                  , multiResults.getM_votes());
//                      }
//                }
//                partyList.put(constituency.getTitle(), partyList);
//                }                     
//            
//        }
//        return null;
//    }
//    
//    
//}
