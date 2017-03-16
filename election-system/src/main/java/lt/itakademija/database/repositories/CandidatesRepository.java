package lt.itakademija.database.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.itakademija.database.models.Candidates;

import javax.transaction.Transactional;

public interface CandidatesRepository extends JpaRepository<Candidates, Integer> {

    @Query("SELECT c FROM Candidates c where c.constituency_id=:constituency_id")
    public List<Candidates> findByConstituencies(@Param("constituency_id") Integer constituency_id);

    @Query("SELECT c FROM Candidates c where c.party_id=:party_id")
    public List<Candidates> findByPartyId(@Param("party_id") Integer party_id);

    @Query("SELECT c FROM Candidates c where c.personal_id=:personal_id")
    public Candidates checkIfExist(@Param("personal_id") String personal_id);

    public List<Candidates> findByName(@Param("name") String candidateName);

    @Query("SELECT c FROM Candidates c where c.last_name=:last_name")
    public List<Candidates> findByLast_name(@Param("last_name") String candidateLastName);

    @Query("SELECT c FROM Candidates c where c.party_id=:party_id")
    public List<Candidates> findByParty_id(@Param("party_id") Integer partyId);


    @Query("SELECT c FROM Candidates c where c.party_id=:party_id "
            + "and c.party_list_seat=:party_list_seat")
    public Candidates findByPartyAndSeat(@Param("party_id") Integer partyId,
                                         @Param("party_list_seat") Integer partySeat);


    @Query("SELECT c FROM Candidates c where c.candidate_elected=:candidate_elected")
    public List<Candidates> findByElected(@Param("candidate_elected") String candidate_elected);


    @Query("SELECT c FROM Candidates c where c.candidate_elected='multi' or c.candidate_elected='single' order by c.last_name, c.name")
    public List<Candidates> findElected();
}
