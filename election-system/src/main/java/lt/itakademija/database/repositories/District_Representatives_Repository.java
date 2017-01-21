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
 * @author CodeCamp
 * 2017
 */
@Repository
public class District_Representatives_Repository {
	
private static final String FIND_ALL = "SELECT r from District_Representatives r";
	
	@Autowired
	private EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	public List<District_Representatives> findAllDistrict_Representatives() {
		return entityManager.createQuery(FIND_ALL).getResultList();
	}

	@Transactional
	public District_Representatives saveOrUpdate(District_Representatives district_representatives) {
		if (district_representatives.getId() == null) {
			entityManager.persist(district_representatives);
			return district_representatives;
		} else {
			District_Representatives merged = entityManager.merge(district_representatives);
			entityManager.persist(merged);
			return merged;
		}
	}

}
