/**
 * 
 */
package lt.itakademija.database.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.Constituency;
import lt.itakademija.database.services.ConstituencyService;

/**
 * @author CodeCamp 2017
 */
@RestController
@CrossOrigin
public class ConstituencyController {

	@Autowired
	private ConstituencyService service;

	// mappingai nuorodos postamana Pvz:
	// localhost:8080/api/constituencies
	@RequestMapping(value = "/api/constituencies")
	public Iterable<Constituency> constituencies() {
		return service.findAll();
	}

	// mappingai nuorodos postamana Pvz:
	// localhost:8080/api/products?title=samsung
	@GetMapping(value = "/api/constituencies", params = { "title" })
	public Iterable<Constituency> findConstituenciesByTitle(@RequestParam String title) {
		return service.findByTitle(title);
	}

	@PostMapping("/api/constituencies")
	public Constituency createOrUpdateConstituency(@RequestBody Constituency c) {
		return service.saveOrUpdate(c);
	}

	// @RequestMapping(value = "/api/constituency", method = RequestMethod.POST)
	// public Constituency createOrUpdateConstituency(@RequestBody Constituency
	// constituency) {
	// return service.saveOrUpdate(constituency);
	// }

	// @RequestMapping(value = "/api/constituency/{id}", method =
	// RequestMethod.GET)
	// public Constituency getConstituencyById(@PathVariable("id") Integer id) {
	// return constituencyRepository.findConstituencyById(id);
	// }
	//
	// @RequestMapping(value = "/api/constituency/{id}", method =
	// RequestMethod.PUT)
	// public void deteleConstituencyById(@PathVariable("id") Integer id) {
	// constituencyRepository.deleteConstituency(id);
	// }

}