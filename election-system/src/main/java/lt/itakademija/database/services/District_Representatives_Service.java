/**
 * 
 */
package lt.itakademija.database.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.District_Representatives;
import lt.itakademija.database.repositories.District_Representatives_Repository;

/**
 * @author CodeCamp 2017
 */
@Service
public class District_Representatives_Service {
	
	@Autowired
	private District_Representatives_Repository repository;
	
	@Transactional(readOnly = true)
	public List<District_Representatives> findAll() {
		List<District_Representatives> all = repository.findAll();
		return all.stream().map(r -> {
			District_Representatives newR = new District_Representatives();
			newR.setId(r.getId());
			newR.setDistrict_id(r.getDistrict_id());
			newR.setName(r.getName());
			newR.setLast_name(r.getLast_name());
			return newR;
		}).collect(Collectors.toList());
	}
	
	@Transactional
	public District_Representatives saveOrUpdate(District_Representatives r) {
		return repository.saveOrUpdate(r);
	}

}
