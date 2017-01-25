/**
 * 
 */
package lt.itakademija.database.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lt.itakademija.database.models.District_Representatives;

/**
 * @author CodeCamp 2017
 */
@Repository
public class District_Representatives_Repository {

	@Autowired
	private EntityManager entityManager;

	public List<District_Representatives> findAll() {
		return entityManager.createQuery("SELECT r from District_Representatives r").getResultList();
	}

	@Transactional
	public District_Representatives saveOrUpdate(District_Representatives r) {
		if (r.getId() == null) {
			entityManager.persist(r);
			return r;
		} else {
			District_Representatives merged = entityManager.merge(r);
			entityManager.persist(merged);
			return merged;
		}
	}

}
