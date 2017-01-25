/**
 * 
 */
package lt.itakademija.database.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.Parties;
import lt.itakademija.database.repositories.PartiesRepository;

/**
 * @author CodeCamp 2017
 */
@Service
public class PartiesService {
	
	@Autowired
	private PartiesRepository repository;

	@Transactional(readOnly = true)
	public List<Parties> findAll() {
		List<Parties> all = repository.findAll();
		return all.stream().map(p -> {
			Parties newP = new Parties();
			newP.setId(p.getId());
			newP.setTitle(p.getTitle());
			return newP;
		}).collect(Collectors.toList());
	}

	@Transactional
	public Parties saveOrUpdate(Parties p) {
		return repository.saveOrUpdate(p);
	}

}
