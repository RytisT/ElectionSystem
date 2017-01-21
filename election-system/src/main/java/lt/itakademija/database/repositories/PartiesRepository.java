/**
 * 
 */
package lt.itakademija.database.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lt.itakademija.database.models.Parties;

/**
 * @author CodeCamp
 * 2017
 */
@Repository
public class PartiesRepository {
	
private static final String FIND_ALL = "SELECT p from Parties p";
	
	@Autowired
	private EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	public List<Parties> findAllParties() {
		return entityManager.createQuery(FIND_ALL).getResultList();
	}

	@Transactional
	public Parties saveOrUpdate(Parties parties) {
		if (parties.getId() == null) {
			entityManager.persist(parties);
			return parties;
		} else {
			Parties merged = entityManager.merge(parties);
			entityManager.persist(merged);
			return merged;
		}
	}

}
