/**
 *
 */
package lt.itakademija.database.services;

import java.util.List;

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

    public void deleteById(Integer id) {
        repository.delete(id);
    }

    public Candidates findById(Integer id) {
        return repository.findOne(id);
    }

    public Candidates checkIfExist(String personalId) { return repository.checkIfExist(personalId); }

    public List<Candidates> findByConstituency(Integer constId) {
        return repository.findByConstituencies(constId);
    }

    public List<Candidates> findByFirstName(String candidateName) {
        return repository.findByName(candidateName);
    }

    public List<Candidates> findByLastName(String candidateLastName) {
        return repository.findByLast_name(candidateLastName);
    }

    public List<Candidates> findByPartyId(Integer partyId) {
        return repository.findByParty_id(partyId);
    }

    public Candidates findByPartyAndSeat(Integer partyId, Integer partySeat) {
        return repository.findByPartyAndSeat(partyId, partySeat);
    }

    public void deletePartyCandidates(Integer id) {
        List<Candidates> partyCandidates = repository.findByPartyId(id);
        for(Candidates temp: partyCandidates){
            if(temp.getConstituency_id() == null) {
                deleteById(temp.getId());
            } else {
                temp.setParty_id(null);
                temp.setParty_list_seat(null);
                saveOrUpdate(temp);
                }
        }
    }

    public void deleteConstCandidates(Integer id) {
        List<Candidates> partyCandidates = repository.findByConstituencies(id);
        for(Candidates temp: partyCandidates){
            if(temp.getParty_id() == null) {
                deleteById(temp.getId());
            } else {
                temp.setConstituency_id(null);
                saveOrUpdate(temp);
            }
        }
    }

    public List<Candidates> findByElected(String elected) {return repository.findByElected(elected);}

    public List<Candidates> findElected() {return repository.findElected();}
}