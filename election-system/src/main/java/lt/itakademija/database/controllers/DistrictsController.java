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

import lt.itakademija.database.models.Districts;
import lt.itakademija.database.repositories.DistrictsRepository;

/**
 * @author CodeCamp
 * 2017
 */
@RestController
@CrossOrigin
public class DistrictsController {
	
	@Autowired
	private DistrictsRepository districtsRepository;
	
	@RequestMapping(value = "/api/districts", method = RequestMethod.GET)
	public List<Districts> findAllDistricts() {
		return districtsRepository.findAllDistricts();
	}

	@RequestMapping(value = "/api/districts", method = RequestMethod.POST)
	public Districts createOrUpdateDistricts(@RequestBody Districts districts) {
		return districtsRepository.saveOrUpdate(districts);
	}

}
