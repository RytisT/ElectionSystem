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
 * @author CodeCamp
 * 2017
 */
@Repository
public class DistrictsRepository {
	
	private static final String FIND_ALL = "SELECT d from Districts d";
	
	@Autowired
	private EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	public List<Districts> findAllDistricts() {
		return entityManager.createQuery(FIND_ALL).getResultList();
	}

	@Transactional
	public Districts saveOrUpdate(Districts districts) {
		if (districts.getId() == null) {
			entityManager.persist(districts);
			return districts;
		} else {
			Districts merged = entityManager.merge(districts);
			entityManager.persist(merged);
			return merged;
		}
	}

}
