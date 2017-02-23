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

import lt.itakademija.database.models.Single_Results;
import lt.itakademija.database.services.Single_Results_Service;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/single_results")
public class Single_Results_Controller {

    @Autowired
    private Single_Results_Service service;

    @GetMapping
    public Iterable<Single_Results> single_results() {
        return service.findAll();
    }

    @PostMapping
    public Single_Results createOrUpdateSingleResults(@RequestBody Single_Results sr) {
        return service.saveOrUpdate(sr);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteSingleResultsById(@PathVariable("id") Integer id) {
        service.deleteById(id);
    }

    @GetMapping(value = "/{id}")
    public Single_Results findSingleResultsById(@PathVariable("id") Integer id) {
        return service.findById(id);
    }

}
