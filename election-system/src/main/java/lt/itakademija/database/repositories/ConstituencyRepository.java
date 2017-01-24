/**
 * 
 */
package lt.itakademija.database.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import lt.itakademija.database.models.Constituency;

/**
 * @author CodeCamp 2017
 */
@Repository
public class ConstituencyRepository {

	@Autowired
	private EntityManager entityManager;
	
	public Constituency saveOrUpdate(Constituency c) {
		if (c.getId() == null) {
			entityManager.persist(c);
			return c;
		} else {
			Constituency merged = entityManager.merge(c);
			entityManager.persist(merged);
			return merged;
		}
	}


	public Iterable<Constituency> findByTitle(String title) {

		// gauti apygardu sarasa pagal nurodyta title po klaustuko
		Query q = entityManager.createQuery("SELECT c FROM Constituency c WHERE p.title = :title");
		q.setParameter("title", title);
		return q.getResultList();
	}

	public List<Constituency> findAll() {
		return entityManager.createQuery("select c from Constituency c").getResultList();
	}

	

	// public Constituency findConstituencyById(Integer id) {
	// Constituency constituency = entityManager.find(Constituency.class, id);
	// return constituency;
	// }
	//
	// @Transactional
	// public void deleteConstituency(Integer id) {
	// Constituency constituency = entityManager.find(Constituency.class, id);
	// entityManager.persist(constituency);
	// }
}
