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
 * @author CodeCamp 2017
 */
@Repository
public class PartiesRepository {

	@Autowired
	private EntityManager entityManager;
	
	public List<Parties> findAll() {
		return entityManager.createQuery("SELECT p from Parties p").getResultList();
	}

	@Transactional
	public Parties saveOrUpdate(Parties p) {
		if (p.getId() == null) {
			entityManager.persist(p);
			return p;
		} else {
			Parties merged = entityManager.merge(p);
			entityManager.persist(merged);
			return merged;
		}
	}

}
