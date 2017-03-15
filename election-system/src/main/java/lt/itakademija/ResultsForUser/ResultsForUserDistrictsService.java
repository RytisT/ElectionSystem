package lt.itakademija.ResultsForUser;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.itakademija.database.models.Districts;
import lt.itakademija.database.models.Multi_Results;
import lt.itakademija.database.models.Single_Results;
import lt.itakademija.database.services.CandidatesService;
import lt.itakademija.database.services.DistrictsService;
import lt.itakademija.database.services.PartiesService;

@Service
public class ResultsForUserDistrictsService {

    @Autowired
    private PartiesService partiesService;
    @Autowired
    private DistrictsService districtsService;
    @Autowired
    private CandidatesService candidatesService;
    
    //FR5. Rinkiminių apylinkių rezultatai
    
    
    /*
     * Apylinkės balsų įregistravimo laiką
     * Vienamandatės apygardos
     * returns Map<Title, single vote time>
     */
    public HashMap<Integer, Date> districtsSingleVoteTime(){
        HashMap<Integer, Date> votesSingleTime= new HashMap<>();
        for(Districts districts: districtsService.findAll()){
            votesSingleTime.put(districts.getId(), districts.getVotedSingleTime());
        }
        return votesSingleTime;
    }
    
    /*
     * Apylinkės balsų įregistravimo laiką
     * Daugiamandatės apygardos
     * returns Map<Title, multi vote time>
     */
    public HashMap<Integer, Date> districtsMultiVoteTime(){
        HashMap<Integer, Date> votesMultiTime= new HashMap<>();
        for(Districts districts: districtsService.findAll()){
            votesMultiTime.put(districts.getId(), districts.getVotedMultiTime());
        }
        return votesMultiTime;
    }
    
    /*
     *  Rinkėjų aktyvumą vienetais 
     *  returns Map<Title, multi cast votes + multi corrupt votes>
     */
   
    public HashMap<Integer, Integer> votersParticipationCount(){
        HashMap<Integer, Integer> votersParticipationMap = new HashMap<>();
        for(Districts districts: districtsService.findAll()){
            votersParticipationMap.put(districts.getId(), districts.getVotedMultiCorrupt()+districts.getVotedMulti());
        }
        return votersParticipationMap;
    }
    
    /*
     * Procentais nuo visų rinkėjų
     * returns Map<Title, procentai balsavusiu>
     */
    public HashMap<Integer, Float> votersParticipationPercent(){
        HashMap<Integer, Float> votersPercentMap = new HashMap<>();
        for(Districts districts: districtsService.findAll()){
            votersPercentMap.put(districts.getId(), 
                     ((float)(districts.getVotedMultiCorrupt()+districts.getVotedMulti())/(float)districts.getNumber_of_voters()*100));
        }
        return votersPercentMap;
    }
    
    /*
     * Balsų skaičių daugiamandatėje
     * Balsų skaičių už kiekvieną sąrašą
     * returns Map<districts title ,Map<party.title, votes for party>>
     */
    public HashMap<Integer, HashMap<String, Integer>> districtPartyList(){
        HashMap<Integer, HashMap<String, Integer>> votesForPartiesMap = new HashMap<>();
        for(Districts district: districtsService.findAll()){
            HashMap<String, Integer> votesForOneParty = new HashMap<>();
            votesForPartiesMap.put(districtsService.findById(district.getId()).getId(), votesForOneParty); 
            for(Multi_Results results: district.getMulti_results()){
                votesForOneParty.put(partiesService.findById(results.getParty_id()).getTitle(), results.getM_votes());
            }
        }
        return votesForPartiesMap;
    }
    /*
     * Balsų skaičių daugiamandatėje procentais nuo visų biuletenių
     * returns Map<districts title ,Map<party.title, votes for party percent>>
     */
    public HashMap<Integer, HashMap<String, Float>> districtPartyPercentList(){
        HashMap<Integer, HashMap<String, Float>> votesForPartiesPercentMap = new HashMap<>();
        for(Districts district: districtsService.findAll()){
            HashMap<String, Float> votesForOneParty = new HashMap<>();
            votesForPartiesPercentMap.put(districtsService.findById(district.getId()).getId(), votesForOneParty); 
            float percentPlaceholder = districtsService.findById(district.getId()).getNumber_of_voters();
            for(Multi_Results results: district.getMulti_results()){
                votesForOneParty.put(partiesService.findById(results.getParty_id()).getTitle(), 
                        (float) (results.getM_votes()/percentPlaceholder*100));                
            }
        }
        return votesForPartiesPercentMap;
    }
    /*
     * Balsų skaičių daugiamandatėje procentais galiojančių biuletenių
     * returns Map<districts title ,Map<party.title, votes for party percent>>
     */
    public HashMap<Integer, HashMap<String, Float>> districtPartyPercentListValid(){
        HashMap<Integer, HashMap<String, Float>> votesForPartiesPercentMap = new HashMap<>();
        for(Districts district: districtsService.findAll()){
            HashMap<String, Float> votesForOneParty = new HashMap<>();
            votesForPartiesPercentMap.put(districtsService.findById(district.getId()).getId(), votesForOneParty); 
            float percentPlaceholder = districtsService.findById(district.getId()).getNumber_of_voters()
                    -districtsService.findById(district.getId()).getVotedMultiCorrupt();
            for(Multi_Results results: district.getMulti_results()){
                votesForOneParty.put(partiesService.findById(results.getParty_id()).getTitle(), 
                        (float) (results.getM_votes()/percentPlaceholder*100));                
            }
        }
        return votesForPartiesPercentMap;
    }
    /*
     * Sugadintų daugiamandatės biuletenių skaičių
     * returns Map<district title, number of corrupt multi votes>
     */
    public HashMap<Integer, Integer> corruptMultiVotesDistrict(){
        HashMap<Integer, Integer> corruptVotesList = new HashMap<>();
        for(Districts district: districtsService.findAll()){
            corruptVotesList.put(districtsService.findById(district.getId()).getId(), 
                    districtsService.findById(district.getId()).getVotedMultiCorrupt());
        }
        return corruptVotesList;
    }
    /*
     * Kiekvienam vienmandatės kandidatui Balsų skaičių
     */
    public HashMap<Integer, HashMap<String, Integer>> districtSingleCandidateList(){
        HashMap<Integer, HashMap<String, Integer>> votesForCandidatesMap = new HashMap<>();
        for(Districts district: districtsService.findAll()){
            HashMap<String, Integer> votesForOneCandidate = new HashMap<>();
            votesForCandidatesMap.put(districtsService.findById(district.getId()).getId(), votesForOneCandidate); 
            for(Single_Results results: district.getSingle_results()){
                votesForOneCandidate.put(candidatesService.findById(results.getCandidates_id()).getName() + " " +
                        candidatesService.findById(results.getCandidates_id()).getLast_name()
                        , results.getVote());                
            }
        }
        return votesForCandidatesMap;
    }
    /*
     * Kiekvienam vienmandatės kandidatui Balsų skaičių procentais nuo visų biuletenių
     */
    public HashMap<Integer, HashMap<String, Float>> districtSingleCandidateListPercent(){
        HashMap<Integer, HashMap<String, Float>> votesForCandidatesMap = new HashMap<>();
        for(Districts district: districtsService.findAll()){
            HashMap<String, Float> votesForOneCandidate = new HashMap<>();
            votesForCandidatesMap.put(districtsService.findById(district.getId()).getId(), votesForOneCandidate); 
            float percentPlaceholder = districtsService.findById(district.getId()).getNumber_of_voters();
            for(Single_Results results: district.getSingle_results()){
                votesForOneCandidate.put(candidatesService.findById(results.getCandidates_id()).getName() + " " +
                        candidatesService.findById(results.getCandidates_id()).getLast_name()
                        , results.getVote()/percentPlaceholder*100);                
            }
        }
        return votesForCandidatesMap;
    }
    
    /*
     * Sugadintų daugiamandatės biuletenių skaičių
     * returns Map<district title, number of corrupt multi votes>
     */
    public HashMap<Integer, Integer> corruptSingleVotesDistrict(){
        HashMap<Integer, Integer> corruptVotesList = new HashMap<>();
        for(Districts district: districtsService.findAll()){
            corruptVotesList.put(districtsService.findById(district.getId()).getId(), 
                    districtsService.findById(district.getId()).getVotedSingleCorrupt());
        }
        return corruptVotesList;
    }
}
