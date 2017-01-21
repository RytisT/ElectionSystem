/**
 * 
 */
package lt.itakademija.database.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.Constituency;
import lt.itakademija.database.repositories.ConstituencyRepository;



/**
 * @author CodeCamp
 * 2017
 */
@RestController
@CrossOrigin
public class ConstituencyController {

	@Autowired
	private ConstituencyRepository constituencyRepository;

	@RequestMapping(value = "/api/constituency", method = RequestMethod.GET)
	public List<Constituency> findAllConstituencies() {
		return constituencyRepository.findAllConstituencies();
	}

	@RequestMapping(value = "/api/constituency", method = RequestMethod.POST)
	public Constituency createOrUpdateConstituency(@RequestBody Constituency constituency) {
		return constituencyRepository.saveOrUpdate(constituency);
	}

	@RequestMapping(value = "/api/constituency/{id}", method = RequestMethod.GET)
	public Constituency getConstituencyById(@PathVariable("id") Integer id) {
		return constituencyRepository.findConstituencyById(id);
	}

	@RequestMapping(value = "/api/constituency/{id}", method = RequestMethod.PUT)
	public void deteleConstituencyById(@PathVariable("id") Integer id) {
		constituencyRepository.deleteConstituency(id);
	}

}