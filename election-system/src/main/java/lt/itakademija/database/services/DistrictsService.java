/**
 * 
 */
package lt.itakademija.database.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.Districts;
import lt.itakademija.database.repositories.DistrictsRepository;

/**
 * @author CodeCamp 2017
 */
@Service
public class DistrictsService {
	
	@Autowired
	private DistrictsRepository repository;
	
	@Transactional(readOnly = true)
	public List<Districts> findAll() {
		List<Districts> all = repository.findAll();
		return all.stream().map(d -> {
			Districts newD = new Districts();
			newD.setId(d.getId());
			newD.setConstituency_id(d.getConstituency_id());
			newD.setTitle(d.getTitle());
			newD.setNumber_of_voters(d.getNumber_of_voters());
			newD.setAddress(d.getAddress());
			return newD;
		}).collect(Collectors.toList());
	}

	@Transactional
	public Districts saveOrUpdate(Districts d) {
		return repository.saveOrUpdate(d);
	}

}
