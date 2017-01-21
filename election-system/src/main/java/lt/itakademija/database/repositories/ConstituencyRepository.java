/**
 * 
 */
package lt.itakademija.database.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lt.itakademija.database.models.Constituency;

/**
 * @author CodeCamp 2017
 */
@Repository
public class ConstituencyRepository {
	
	private static final String FIND_ALL = "SELECT c from Constituency";

	@Autowired
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	public List<Constituency> findAllConstituencies() {
		return entityManager.createQuery(FIND_ALL).getResultList();

	}

	@Transactional
	public Constituency saveOrUpdate(Constituency constituency) {
		if (constituency.getId() == null) {
			entityManager.persist(constituency);
			return constituency;
		} else {
			Constituency merged = entityManager.merge(constituency);
			entityManager.persist(merged);
			return merged;
		}
	}

	public Constituency findConstituencyById(Integer id) {
		Constituency constituency = entityManager.find(Constituency.class, id);
		return constituency;
	}

	@Transactional
	public void deleteConstituency(Integer id) {
		Constituency constituency = entityManager.find(Constituency.class, id);
		entityManager.persist(constituency);
	}
}
