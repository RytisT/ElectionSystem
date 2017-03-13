<<<<<<< HEAD
package lt.itakademija.ResultsForUser;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import static java.lang.Math.toIntExact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.itakademija.database.models.Constituency;
import lt.itakademija.database.models.Districts;
import lt.itakademija.database.models.Multi_Results;
import lt.itakademija.database.models.Single_Results;
import lt.itakademija.database.repositories.DistrictsRepository;
import lt.itakademija.database.services.CandidatesService;
import lt.itakademija.database.services.ConstituencyService;
import lt.itakademija.database.services.DistrictsService;
import lt.itakademija.database.services.Multi_Results_Service;
import lt.itakademija.database.services.PartiesService;
import lt.itakademija.results.ResultMultiCalculationService;

/*
 * FR6. Rinkiminių apygardų rezultatai
 */
@Service
public class ResultsForUserConstituenciesService {

    @Autowired
    private ResultMultiCalculationService resultMultiCalculationService;
    @Autowired
    private ConstituencyService constituencyService;
    @Autowired
    private DistrictsRepository distrep;
    @Autowired
    private PartiesService partiesService;
    @Autowired
    private DistrictsService districtsService;
    @Autowired
    private ResultsForUserDistrictsService districtsResultsService;
    @Autowired
    private CandidatesService candidatesService;

    /*
     * Rinkėjų aktyvumas Vienetais returns Map<Constituency name, votes cast>
     */
    public Map<String, Integer> constituencyVoterActivity() {
        Map<String, Integer> constituencyList = new HashMap<>();
        for (Constituency constituency : constituencyService.findAll()) {
            for (Districts districts : distrep.findByConstituencies(constituency.getId())) {
                for (Multi_Results multiResults : districts.getMulti_results()) {
                    if (constituencyList.containsKey(constituency.getTitle())) {
                        constituencyList.put(constituency.getTitle(),
                                constituencyList.get(constituency.getTitle()) + multiResults.getM_votes());
                    } else {
                        constituencyList.put(constituency.getTitle(), multiResults.getM_votes());
                    }
                }
            }
        }
        return constituencyList;
    }

    /*
     * Rinkėjų aktyvumas Procentais nuo visų rinkėjų returns Map<Constituency
     * name, percent of active voters, round 2 decimal places>
     */
    public Map<String, Float> constituencyVoterActivityPercent() {

        Map<String, Integer> possibleVoters = new HashMap<>();
        Map<String, Float> percentVotes = new HashMap<>();
        for (Constituency constituency : constituencyService.findAll()) {
            Long value = 0l;
            for (Districts districts : distrep.findAll()) {
                if (constituency.getId().equals(districts.getConstituency_id())) {
                    possibleVoters.put(constituency.getTitle(), toIntExact(value += districts.getNumber_of_voters()));
                }
            }
        }
        for (Map.Entry<String, Integer> possibleVoter : possibleVoters.entrySet()) {
            for (Map.Entry<String, Integer> allVoter : constituencyVoterActivity().entrySet()) {
                if (possibleVoter.getKey().equals(allVoter.getKey())) {
                    percentVotes.put(possibleVoter.getKey(),
                            (float) Math.round((allVoter.getValue() / (float) (possibleVoter.getValue()) * 100) * 100)
                                    / 100);
                }
            }
        }
        return percentVotes;
    }

    /*
     * Balsų skaičių daugiamandatėje Balsų skaičių už kiekvieną sąrašą returns
     * Map<title of constituency<title of party, number of votes>>
     */
    public HashMap<String, HashMap<String, Integer>> constitencyMultiActivity() {
        HashMap<String, HashMap<String, Integer>> partyActivityMap = new HashMap<>();
        for (Constituency constituency : constituencyService.findAll()) {
            HashMap<String, Integer> partyList = new HashMap<>();
            for (Districts districts : distrep.findAll()) {
                for (Multi_Results multiResults : districts.getMulti_results()) {
                    if (districts.getConstituency_id().equals(constituency.getId())) {
                        if (partyList.containsKey(partiesService.findById(multiResults.getParty_id()).getTitle())) {
                            partyList.put(partiesService.findById(multiResults.getParty_id()).getTitle(),
                                    partyList.get(partiesService.findById(multiResults.getParty_id()).getTitle())
                                            + multiResults.getM_votes());
                        } else {
                            partyList.put(partiesService.findById(multiResults.getParty_id()).getTitle(),
                                    multiResults.getM_votes());
                        }
                    }
                    partyActivityMap.put(constituency.getTitle(), partyList);
                }
            }
        }
        return partyActivityMap;
    }

    /*
     * Balsų skaičių daugiamandatėje Balsų skaičių procentais nuo visų
     * biuletenių
     */
    public HashMap<String, HashMap<String, Float>> constitencyMultiActivityPercent() {
        HashMap<String, Integer> partyList = new HashMap<>();
        HashMap<String, HashMap<String, Float>> partyListPercent = new HashMap<>();
        HashMap<String, Float> partyPercent = new HashMap<>();
        HashMap<String, Float> placeHolder = new HashMap<>();
        for (Constituency constituency : constituencyService.findAll()) {
            for (Districts districts : distrep.findAll()) {
                if (districts.getConstituency_id().equals(constituency.getId())) {
                    if (partyList.containsKey(constituency.getTitle())) {
                        partyList.put(constituency.getTitle(), Math
                                .toIntExact(partyList.get(constituency.getTitle()) + districts.getNumber_of_voters()));
                    } else {
                        partyList.put(constituency.getTitle(), Math.toIntExact(districts.getNumber_of_voters()));
                    }
                }
            }
        }

//        for (Entry<String, HashMap<String, Integer>> entry : constitencyMultiActivity().entrySet()) {            
//            for (Entry<String, Integer> entry2 : entry.getValue().entrySet()) {
//                if (entry.getValue().containsValue(entry2)) {
//                    // for (Entry<String, Integer> partyEntry :
//                    // partyList.entrySet()){
//                    partyListPercent.put(entry.getKey(), placeHolder);
//                    placeHolder.put(entry2.getKey(), (float) entry2.getValue());
//                }
//
//            }
//        }

        // constitencyMultiActivity().forEach((consts, nestedMap) -> {
        // nestedMap.forEach((party, count) -> {
        // partyListPercent.put(consts, new HashMap(){{put(party, count);}});
        // });
        // });
        for(Entry<String, Integer> partyEntry : partyList.entrySet()){
//            if(){
//                
//            }
        }
        

        return partyListPercent;
    }

    /*
     * Sugadintų daugiamandatės biuletenių skaičių return Map<Constiyuency,
     * number of corrupt votes>
     */
    public Map<String, Integer> constituencyMultiCorruptVotes() {
        Map<String, Integer> constituencyList = new HashMap<>();
        for (Constituency constituency : constituencyService.findAll()) {
            for (Districts districts : distrep.findByConstituencies(constituency.getId())) {
                if (constituencyList.containsKey(constituency.getTitle())) {
                    constituencyList.put(constituency.getTitle(),
                            constituencyList.get(constituency.getTitle()) + districts.getVotedMultiCorrupt());
                } else {
                    constituencyList.put(constituency.getTitle(), districts.getVotedMultiCorrupt());
                }
            }
        }
        return constituencyList;
    }

    /*
     * Kiekvienam vienmandatės kandidatui Balsų skaičių
     */

    public HashMap<String, HashMap<String, Integer>> constitencySingleActivity() {
        HashMap<String, HashMap<String, Integer>> partyActivityMap = new HashMap<>();
        for (Constituency constituency : constituencyService.findAll()) {
            HashMap<String, Integer> candidateList = new HashMap<>();
            for (Districts districts : distrep.findAll()) {
                for (Single_Results singleResults : districts.getSingle_results()) {
                    if (districts.getConstituency_id().equals(constituency.getId())) {
                        if (candidateList.containsKey(candidatesService.findById(singleResults.getCandidates_id())
                                .getName() + " "
                                + candidatesService.findById(singleResults.getCandidates_id()).getLast_name())) {
                            candidateList.put(
                                    candidatesService.findById(singleResults.getCandidates_id()).getName() + " "
                                            + candidatesService.findById(singleResults.getCandidates_id())
                                                    .getLast_name(),
                                    candidateList
                                            .get(candidatesService.findById(singleResults.getCandidates_id()).getName()
                                                    + " " + candidatesService.findById(singleResults.getCandidates_id())
                                                            .getLast_name())
                                            + singleResults.getVote());
                        } else {
                            candidateList.put(candidatesService.findById(singleResults.getCandidates_id()).getName()
                                    + " " + candidatesService.findById(singleResults.getCandidates_id()).getLast_name(),
                                    singleResults.getVote());
                        }
                    }
                    partyActivityMap.put(constituency.getTitle(), candidateList);
                }
            }
        }
        return partyActivityMap;
    }

    /*
     * Sugadintų vienmandatės biuletenių skaičių
     */

    public Map<String, Integer> constituencySingleCorruptVotes() {
        Map<String, Integer> constituencyList = new HashMap<>();
        for (Constituency constituency : constituencyService.findAll()) {
            for (Districts districts : distrep.findByConstituencies(constituency.getId())) {
                if (constituencyList.containsKey(constituency.getTitle())) {
                    constituencyList.put(constituency.getTitle(),
                            constituencyList.get(constituency.getTitle()) + districts.getVotedSingleCorrupt());
                } else {
                    constituencyList.put(constituency.getTitle(), districts.getVotedSingleCorrupt());
                }
            }
        }
        return constituencyList;
    }
}
=======
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
>>>>>>> 5a3f71afbdd742baa436a160f090306c3d73d2ca
