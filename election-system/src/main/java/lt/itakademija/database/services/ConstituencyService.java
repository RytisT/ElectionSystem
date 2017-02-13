/**
 * 
 */
package lt.itakademija.database.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.Constituency;
import lt.itakademija.database.repositories.Constituencies;

/**
 * @author CodeCamp
 * 2017
 */
@Service
@Transactional
public class ConstituencyService {

	@Autowired
	private Constituencies repository;

	public List<Constituency> findAll() {
	    return repository.findAll();
	}	
	
    public Constituency saveOrUpdate(Constituency constituency) {
	    repository.save(constituency);
	    return constituency;
    }
	
	public void deleteById(Integer id){
	    repository.delete(id);
	}

	public Constituency findById(Integer id){
	    return repository.findOne(id);
	}
}
