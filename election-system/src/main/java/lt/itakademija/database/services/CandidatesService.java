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
public class CandidatesService {

	@Autowired
	private CandidatesRepository repository;

	@Transactional(readOnly = true)
	public List<Candidates> findAll() {
		List<Candidates> all = repository.findAll();
		return all.stream().map(c -> {
			Candidates newC = new Candidates();
			newC.setId(c.getId());
			newC.setConstituency_id(c.getConstituency_id());
			newC.setParty_id(c.getParty_id());
			newC.setName(c.getName());
			newC.setLast_name(c.getLast_name());
			newC.setDate_of_birth(c.getDate_of_birth());
			newC.setDescription(c.getDescription());
			return newC;
		}).collect(Collectors.toList());
	}

	@Transactional
	public Candidates saveOrUpdate(Candidates c) {
		return repository.saveOrUpdate(c);
	}

	// @Transactional(readOnly = true)
	// public Iterable<Candidates> findByName(String name) {
	// return repository.findByName(name);
	// }

}
