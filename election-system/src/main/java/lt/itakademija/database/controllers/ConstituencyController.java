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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import lt.itakademija.database.models.Constituency;
import lt.itakademija.database.services.ConstituencyService;

/**
 * @author CodeCamp 2017
 */
@RestController
@CrossOrigin
@RequestMapping(value = "/api/constituencies")
public class ConstituencyController {

    @Autowired
    private ConstituencyService service;

    @GetMapping
    public List<Constituency> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Constituency createOrUpdateConstituency(@RequestBody Constituency c) {
        return service.saveOrUpdate(c);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        service.deleteById(id);
    }

    @GetMapping(value = "/{id}")
    public Constituency findById(@PathVariable("id") Integer id) {
        return service.findById(id);
    }


}