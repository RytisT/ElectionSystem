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

import lt.itakademija.database.models.Candidates;
import lt.itakademija.database.repositories.CandidatesRepository;

/**
 * @author CodeCamp
 * 2017
 */
@RestController
@CrossOrigin
public class CandidatesController {
	
	@Autowired
	private CandidatesRepository candidatesRepository;
	
	@RequestMapping(value = "/api/candidates", method = RequestMethod.GET)
	public List<Candidates> findAllCandidates() {
		return candidatesRepository.findAllCandidates();
	}

	@RequestMapping(value = "/api/candidates", method = RequestMethod.POST)
	public Candidates createOrUpdateCandidates(@RequestBody Candidates candidates) {
		return candidatesRepository.saveOrUpdate(candidates);
	}

}
