/**
 * 
 */
package lt.itakademija.database.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lt.itakademija.database.models.Districts;

/**
 * @author CodeCamp 2017
 */
@Repository
public class DistrictsRepository {

	@Autowired
	private EntityManager entityManager;

	public List<Districts> findAll() {
		return entityManager.createQuery("SELECT d from Districts d").getResultList();
	}

	@Transactional
	public Districts saveOrUpdate(Districts d) {
		if (d.getId() == null) {
			entityManager.persist(d);
			return d;
		} else {
			Districts merged = entityManager.merge(d);
			entityManager.persist(merged);
			return merged;
		}
	}

}
