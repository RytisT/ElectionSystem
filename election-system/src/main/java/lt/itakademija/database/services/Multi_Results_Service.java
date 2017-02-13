package lt.itakademija.database.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.Multi_Results;
import lt.itakademija.database.repositories.Multi_Results_Repository;

@Service
@Transactional
public class Multi_Results_Service {
	
	@Autowired
	private Multi_Results_Repository repository;
	
	public List<Multi_Results> findAll() {
	    return repository.findAll();
	}
	
	public Multi_Results saveOrUpdate(Multi_Results mr) {
		return repository.save(mr);
	}

    public void deleteById(Integer id){
        repository.delete(id);
    }
    
    public Multi_Results findById(Integer id){
        return repository.findOne(id);
    }

}
