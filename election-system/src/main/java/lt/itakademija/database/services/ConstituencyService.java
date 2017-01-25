/**
 * 
 */
package lt.itakademija.database.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.Constituency;
import lt.itakademija.database.repositories.ConstituencyRepository;

/**
 * @author CodeCamp
 * 2017
 */
@Service
public class ConstituencyService {

	@Autowired
	private ConstituencyRepository repository;

	@Transactional(readOnly = true)
	public List<Constituency> findAll() {
		List<Constituency> all = repository.findAll();
		return all.stream().map(c -> {
			Constituency newC = new Constituency();
			newC.setId(c.getId());
			newC.setTitle(c.getTitle());
			return newC;
		}).collect(Collectors.toList());
	}
	
	@Transactional
    public Constituency saveOrUpdate(Constituency c) {
        return repository.saveOrUpdate(c);
    }

    @Transactional(readOnly = true)
	public Iterable<Constituency> findByTitle(String title) {
    	return repository.findByTitle(title);
	}

}
