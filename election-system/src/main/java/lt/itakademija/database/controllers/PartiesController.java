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

import lt.itakademija.database.models.Parties;
import lt.itakademija.database.repositories.PartiesRepository;

/**
 * @author CodeCamp
 * 2017
 */
@RestController
@CrossOrigin
public class PartiesController {
	
	@Autowired
	private PartiesRepository partiesRepository;
	
	@RequestMapping(value = "/api/parties", method = RequestMethod.GET)
	public List<Parties> findAllParties() {
		return partiesRepository.findAllParties();
	}

	@RequestMapping(value = "/api/parties", method = RequestMethod.POST)
	public Parties createOrUpdateParties(@RequestBody Parties parties) {
		return partiesRepository.saveOrUpdate(parties);
	}

}
