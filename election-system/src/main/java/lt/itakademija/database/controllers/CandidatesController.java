/**
 * 
 */
package lt.itakademija.database.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.Candidates;
import lt.itakademija.database.services.CandidatesService;

/**
 * @author CodeCamp 2017
 */
@RestController
@CrossOrigin
@RequestMapping(value = "/api/candidates")
public class CandidatesController {

	@Autowired
	private CandidatesService service;

	@GetMapping
	public Iterable<Candidates> candidates() {
		return service.findAll();
	}

	@PostMapping
	public Candidates createOrUpdateCandidates(@RequestBody Candidates c) {
		return service.saveOrUpdate(c);
	}
	
	@DeleteMapping(value="/{id}")
	public void deleteCandidateById(@PathVariable("id") Integer id){
	    service.deleteById(id);
	}
	
	@GetMapping(value="/{id}")
	public Candidates findCandidateById(@PathVariable("id") Integer id){
	    return service.findById(id);
	}
	

}
