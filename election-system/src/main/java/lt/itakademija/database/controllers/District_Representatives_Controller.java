/**
 * 
 */
package lt.itakademija.database.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.District_Representatives;
import lt.itakademija.database.repositories.District_Representatives_Repository;

/**
 * @author CodeCamp
 * 2017
 */
@RestController
@CrossOrigin
public class District_Representatives_Controller {
	
	@Autowired
	private District_Representatives_Repository district_representatives_Repository;
	
	@RequestMapping(value = "/api/district_representatives", method = RequestMethod.GET)
	public List<District_Representatives> findAllDistrict_Representatives() {
		return district_representatives_Repository.findAllDistrict_Representatives();
	}

	@RequestMapping(value = "/api/district_representatives", method = RequestMethod.POST)
	public District_Representatives createOrUpdateDistricts(@RequestBody District_Representatives district_representatives) {
		return district_representatives_Repository.saveOrUpdate(district_representatives);
	}

}
