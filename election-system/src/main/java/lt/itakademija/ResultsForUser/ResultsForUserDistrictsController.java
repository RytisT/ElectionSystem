package lt.itakademija.ResultsForUser;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.Parties;

@RestController
@CrossOrigin
@RequestMapping(value = "/user/resultsdistricts")
public class ResultsForUserDistrictsController {
    
    @Autowired
    ResultsForUserDistrictsService userResultsDistrictService;
 
    /*
     * Apylinkės balsų įregistravimo laiką
     * Vienamandatės apygardos
     * returns Map<Title, single vote time>
     */
    @GetMapping(value="/single/time")
    public Map<String, String> districtsSingleVoteTime(){
        return userResultsDistrictService.districtsSingleVoteTime();
    }
    
    /*
     * Apylinkės balsų įregistravimo laiką
     * Daugiamandatės apygardos
     * returns Map<Title, multi vote time>
     */
    @GetMapping(value="/multi/time")
    public HashMap<String, String> districtsMultiVoteTime(){
        return userResultsDistrictService.districtsMultiVoteTime();
    }
    
    /*
     *  Rinkėjų aktyvumą vienetais 
     *  returns Map<Title, multi cast votes + multi corrupt votes>
     */
    @GetMapping(value="/participation/count")
    public HashMap<String, Integer> votersParticipationCount(){
        return userResultsDistrictService.votersParticipationCount();
    }
    
    /*
     * Procentais nuo visų rinkėjų
     * returns Map<Title, procentai balsavusiu>
     */
    @GetMapping(value="/participation/percent")
    public HashMap<String, Float> votersParticipationPercent(){
        return userResultsDistrictService.votersParticipationPercent();
    }
    
    /*
     * Balsų skaičių daugiamandatėje
     * Balsų skaičių už kiekvieną sąrašą
     * returns Map<districts title ,Map<party.title, votes for party>>
     */
    @GetMapping(value="/multi/partylist")
    public HashMap<String, HashMap<String, Integer>> districtPartyList(){
        return userResultsDistrictService.districtPartyList();
    }
    /*
     * Balsų skaičių daugiamandatėje procentais nuo visų biuletenių
     * returns Map<districts title ,Map<party.title, votes for party percent>>
     */
    @GetMapping(value="/multi/partypercentlist")
    public HashMap<String, HashMap<String, Float>> districtPartyPercentList(){
        return userResultsDistrictService.districtPartyPercentList();
    }
    /*
     * Balsų skaičių daugiamandatėje procentais galiojančių biuletenių
     * returns Map<districts title ,Map<party.title, votes for party percent>>
     */
    @GetMapping(value="/multi/partypercentlistvalid")
    public HashMap<String, HashMap<String, Float>> districtPartyPercentListValid(){
        return userResultsDistrictService.districtPartyPercentListValid();
    }
    /*
     * Sugadintų daugiamandatės biuletenių skaičių
     * returns Map<district title, number of corrupt multi votes>
     */
    @GetMapping(value="/multi/corrupt")
    public HashMap<String, Integer> corruptMultiVotesDistrict(){
        return userResultsDistrictService.corruptMultiVotesDistrict();
    }
    /*
     * Kiekvienam vienmandatės kandidatui Balsų skaičių
     */
    @GetMapping(value="/single/candidatelist")
    public HashMap<String, HashMap<String, Integer>> districtSingleCandidateList(){
        return userResultsDistrictService.districtSingleCandidateList();
    }
    
    /*
     * Kiekvienam vienmandatės kandidatui Balsų skaičių procentais nuo visų biuletenių
     */
    @GetMapping(value="/single/candidatepercentlist")
    public HashMap<String, HashMap<String, Float>> districtSingleCandidateListPercent(){
        return userResultsDistrictService.districtSingleCandidateListPercent();
    }
    /*
     * Sugadintų daugiamandatės biuletenių skaičių
     * returns Map<district title, number of corrupt multi votes>
     */
    @GetMapping(value="/single/corrupt")
    public HashMap<String, Integer> corruptSingleVotesDistrict(){
        return userResultsDistrictService.corruptSingleVotesDistrict();
    }
}
