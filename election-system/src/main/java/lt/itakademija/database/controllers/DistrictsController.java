/**
 * 
 */
package lt.itakademija.database.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.Districts;
import lt.itakademija.database.services.DistrictsService;

/**
 * @author CodeCamp 2017
 */
@RestController
@CrossOrigin
public class DistrictsController {

	@Autowired
	private DistrictsService service;

	// postman
	// localhost:8080/api/districts
	@RequestMapping(value = "/api/districts")
	public Iterable<Districts> districts() {
		return service.findAll();
	}

	@PostMapping("/api/districts")
	public Districts createOrUpdateDistricts(@RequestBody Districts d) {
		return service.saveOrUpdate(d);
	}

}
