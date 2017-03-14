package lt.itakademija.ResultsForUser;

import java.util.Date;
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
    public HashMap<Integer, Date> districtsSingleVoteTime(){
        return userResultsDistrictService.districtsSingleVoteTime();
    }
    
    /*
     * Apylinkės balsų įregistravimo laiką
     * Daugiamandatės apygardos
     * returns Map<Title, multi vote time>
     */
    @GetMapping(value="/multi/time")
    public HashMap<Integer,Date> districtsMultiVoteTime(){
        return userResultsDistrictService.districtsMultiVoteTime();
    }
    
    /*
     *  Rinkėjų aktyvumą vienetais 
     *  returns Map<Title, multi cast votes + multi corrupt votes>
     */
    @GetMapping(value="/participation/count")
    public HashMap<Integer, Integer> votersParticipationCount(){
        return userResultsDistrictService.votersParticipationCount();
    }
    
    /*
     * Procentais nuo visų rinkėjų
     * returns Map<Title, procentai balsavusiu>
     */
    @GetMapping(value="/participation/percent")
    public HashMap<Integer,Float> votersParticipationPercent(){
        return userResultsDistrictService.votersParticipationPercent();
    }
    
    /*
     * Balsų skaičių daugiamandatėje
     * Balsų skaičių už kiekvieną sąrašą
     * returns Map<districts title ,Map<party.title, votes for party>>
     */
    @GetMapping(value="/multi/partylist")
    public HashMap<Integer,HashMap<String,Integer>> districtPartyList(){
        return userResultsDistrictService.districtPartyList();
    }
    /*
     * Balsų skaičių daugiamandatėje procentais nuo visų biuletenių
     * returns Map<districts title ,Map<party.title, votes for party percent>>
     */
    @GetMapping(value="/multi/partypercentlist")
    public HashMap<Integer,HashMap<String,Float>> districtPartyPercentList(){
        return userResultsDistrictService.districtPartyPercentList();
    }
    /*
     * Balsų skaičių daugiamandatėje procentais galiojančių biuletenių
     * returns Map<districts title ,Map<party.title, votes for party percent>>
     */
    @GetMapping(value="/multi/partypercentlistvalid")
    public HashMap<Integer,HashMap<String,Float>> districtPartyPercentListValid(){
        return userResultsDistrictService.districtPartyPercentListValid();
    }
    /*
     * Sugadintų daugiamandatės biuletenių skaičių
     * returns Map<district title, number of corrupt multi votes>
     */
    @GetMapping(value="/multi/corrupt")
    public HashMap<Integer,Integer> corruptMultiVotesDistrict(){
        return userResultsDistrictService.corruptMultiVotesDistrict();
    }
    /*
     * Kiekvienam vienmandatės kandidatui Balsų skaičių
     */
    @GetMapping(value="/single/candidatelist")
    public HashMap<Integer,HashMap<String,Integer>> districtSingleCandidateList(){
        return userResultsDistrictService.districtSingleCandidateList();
    }
    
    /*
     * Kiekvienam vienmandatės kandidatui Balsų skaičių procentais nuo visų biuletenių
     */
    @GetMapping(value="/single/candidatepercentlist")
    public HashMap<Integer,HashMap<String,Float>> districtSingleCandidateListPercent(){
        return userResultsDistrictService.districtSingleCandidateListPercent();
    }
    /*
     * Sugadintų daugiamandatės biuletenių skaičių
     * returns Map<district title, number of corrupt multi votes>
     */
    @GetMapping(value="/single/corrupt")
    public HashMap<Integer,Integer> corruptSingleVotesDistrict(){
        return userResultsDistrictService.corruptSingleVotesDistrict();
    }
}
