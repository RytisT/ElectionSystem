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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.itakademija.database.models.Districts;
import lt.itakademija.database.models.Parties;
import lt.itakademija.database.services.DistrictsService;

/**
 * @author CodeCamp 2017
 */
@RestController
@CrossOrigin
@RequestMapping(value = "/api/districts")
public class DistrictsController {

    @Autowired
    private DistrictsService service;

    @GetMapping
    public Iterable<Districts> districts() {
        return service.findAll();
    }

    @PostMapping
    public Districts createOrUpdateDistricts(@RequestBody Districts d) {
        return service.saveOrUpdate(d);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        service.deleteById(id);
    }

    @GetMapping(value = "/{id}")
    public Districts findById(@PathVariable("id") Integer id) {
        return service.findById(id);
    }

}
