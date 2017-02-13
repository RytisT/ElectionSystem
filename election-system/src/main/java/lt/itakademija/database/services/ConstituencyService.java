/**
 * 
 */
package lt.itakademija.database.services;

import java.util.List;
import java.util.stream.Collectors;

import lt.itakademija.database.repositories.Constituencies;
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
	private Constituencies repository;

	@Transactional(readOnly = true)
	public List<Constituency> findAll() {
		List<Constituency> all = repository.findAll();
		return all;

	}


	
	/*@Transactional
    public Constituency saveOrUpdate(Constituency c) {

		if (c.getId() == null) {
			entityManager.persist(c);
			return c;
		} else {
			Constituency merged = entityManager.merge(c);
			entityManager.persist(merged);
			return merged;
		}
    }*/

   /* @Transactional(readOnly = true)
	public Iterable<Constituency> findByTitle(String title) {
    	return repository.findByTitle(title);
	}
*/
}
