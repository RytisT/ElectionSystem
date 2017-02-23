/**
 * 
 */
package lt.itakademija.database.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.Candidates;
import lt.itakademija.database.repositories.CandidatesRepository;

/**
 * @author CodeCamp 2017
 */
@Service
@Transactional
public class CandidatesService {

    @Autowired
    private CandidatesRepository repository;

    public List<Candidates> findAll() {
        return repository.findAll();
    }

    public Candidates saveOrUpdate(Candidates c) {
        return repository.save(c);
    }

    public void deleteById(Integer id){
        repository.delete(id);
    }
    
    public Candidates findById(Integer id){
        return repository.findOne(id);
    }
    
    public List<Candidates> findByConstituency(Integer constId){
        return repository.findByConstituencies(constId);
    }
    
    public List<Candidates> findByFirstName(String candidateName){
        return repository.findByName(candidateName);
    }

    public List<Candidates> findByLastName(String candidateLastName){
        return repository.findByLast_name(candidateLastName);
    }
    
    public List<Candidates> findByPartyId(Integer partyId){
        return repository.findByParty_id(partyId);
    }
}
