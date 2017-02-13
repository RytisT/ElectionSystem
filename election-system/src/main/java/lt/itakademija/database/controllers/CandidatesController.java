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

import lt.itakademija.database.models.Candidates;
import lt.itakademija.database.services.CandidatesService;

/**
 * @author CodeCamp 2017
 */
@RestController
@CrossOrigin
public class CandidatesController {

	@Autowired
	private CandidatesService service;

	// postman
	// localhost:8080/api/candidates
	@RequestMapping(value = "/api/candidates")
	public Iterable<Candidates> candidates() {
		return service.findAll();
	}

	@PostMapping("/api/candidates")
	public Candidates createOrUpdateCandidates(@RequestBody Candidates c) {
		return service.saveOrUpdate(c);
	}
	
	// postman
    // localhost:8080/api/candidates?id=3
    @GetMapping(value = "/api/candidates", params = {"id"})
    public Iterable<Candidates> getCandidatesById(@RequestParam Integer id) {
        return service.findById(id);
    }

}
