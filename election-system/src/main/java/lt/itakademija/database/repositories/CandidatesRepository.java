package lt.itakademija.database.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.itakademija.database.models.Candidates;
import lt.itakademija.database.models.Districts;

public interface CandidatesRepository extends JpaRepository<Candidates, Integer>{
    
    @Query("SELECT c FROM Candidates c where c.constituency_id=:constituency_id")
    public List<Candidates> findByConstituencies(@Param("constituency_id") Integer constituency_id);
    
    public List<Candidates> findByName(@Param("name") String candidateName);
    
    @Query("SELECT c FROM Candidates c where c.last_name=:last_name")
    public List<Candidates> findByLast_name(@Param("last_name") String candidateLastName);
    
    @Query("SELECT c FROM Candidates c where c.party_id=:party_id")
    public List<Candidates> findByParty_id(@Param("party_id") Integer partyId); 

}
