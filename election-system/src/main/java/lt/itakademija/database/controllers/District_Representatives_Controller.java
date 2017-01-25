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

import lt.itakademija.database.models.District_Representatives;
import lt.itakademija.database.services.District_Representatives_Service;

/**
 * @author CodeCamp 2017
 */
@RestController
@CrossOrigin
public class District_Representatives_Controller {

	@Autowired
	private District_Representatives_Service service;

	// postman
	// localhost:8080/api/representatives
	@RequestMapping(value = "/api/representatives")
	public Iterable<District_Representatives> representatives() {
		return service.findAll();
	}

	@PostMapping("/api/representatives")
	public District_Representatives createOrUpdateRandidates(@RequestBody District_Representatives r) {
		return service.saveOrUpdate(r);
	}

}
