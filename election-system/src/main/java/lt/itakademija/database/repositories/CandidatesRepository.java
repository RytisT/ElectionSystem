/**
 * 
 */
package lt.itakademija.database.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lt.itakademija.database.models.Candidates;

/**
 * @author CodeCamp 2017
 */
@Repository
public class CandidatesRepository {
	
	@Autowired
	private EntityManager entityManager;
	
	public List<Candidates> findAll() {
		return entityManager.createQuery("SELECT c from Candidates c").getResultList();
	}

	@Transactional
	public Candidates saveOrUpdate(Candidates c) {
		if (c.getId() == null) {
			entityManager.persist(c);
			return c;
		} else {
			Candidates merged = entityManager.merge(c);
			entityManager.persist(merged);
			return merged;
		}
	}

}
