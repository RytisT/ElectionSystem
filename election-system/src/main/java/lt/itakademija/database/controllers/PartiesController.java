/**
 *
 */
package lt.itakademija.database.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.Constituency;
import lt.itakademija.database.models.Parties;
import lt.itakademija.database.services.PartiesService;

/**
 * @author CodeCamp 2017
 */
@RestController
@CrossOrigin
@RequestMapping(value = "/api/parties")
public class PartiesController {

    @Autowired
    private PartiesService service;

    @GetMapping
    public List<Parties> parties() {
        return service.findAll();
    }

    @PostMapping
    public Parties createOrUpdateParties(@RequestBody Parties p) {
        return service.saveOrUpdate(p);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        service.deleteById(id);
    }

    @GetMapping(value = "/{id}")
    public Parties findById(@PathVariable("id") Integer id) {
        return service.findById(id);
    }

    @GetMapping(value = "/mandates")
    public List<Parties> findWithMandates() {
        return service.findWithMandates();
    }

}
