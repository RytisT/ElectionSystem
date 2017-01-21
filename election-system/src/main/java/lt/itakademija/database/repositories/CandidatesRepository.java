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
 * @author CodeCamp
 * 2017
 */
@Repository
public class CandidatesRepository {
	
private static final String FIND_ALL = "SELECT c from Candidates c";
	
	@Autowired
	private EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	public List<Candidates> findAllCandidates() {
		return entityManager.createQuery(FIND_ALL).getResultList();
	}

	@Transactional
	public Candidates saveOrUpdate(Candidates candidates) {
		if (candidates.getId() == null) {
			entityManager.persist(candidates);
			return candidates;
		} else {
			Candidates merged = entityManager.merge(candidates);
			entityManager.persist(merged);
			return merged;
		}
	}

}
