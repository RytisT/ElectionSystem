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

import lt.itakademija.database.models.Parties;
import lt.itakademija.database.services.PartiesService;

/**
 * @author CodeCamp 2017
 */
@RestController
@CrossOrigin
public class PartiesController {

	@Autowired
	private PartiesService service;

	// postman
	// localhost:8080/api/parties
	@RequestMapping(value = "/api/parties")
	public Iterable<Parties> parties() {
		return service.findAll();
	}

	@PostMapping("/api/parties")
	public Parties createOrUpdateParties(@RequestBody Parties p) {
		return service.saveOrUpdate(p);
	}

}
