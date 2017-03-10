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

import lt.itakademija.database.models.Multi_Results;
import lt.itakademija.database.services.Multi_Results_Service;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/multi_results")
public class Multi_Results_Controller {

    @Autowired
    private Multi_Results_Service service;

    @GetMapping
    public Iterable<Multi_Results> multi_results() {
        return service.findAll();
    }

    @PostMapping
    public Multi_Results createOrUpdateMulti_Results(@RequestBody Multi_Results mr) {
        return service.saveOrUpdate(mr);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteMulti_ResultsById(@PathVariable("id") Integer id) {
        service.deleteById(id);
    }

    @GetMapping(value = "/{id}")
    public Multi_Results findMulti_ResultsById(@PathVariable("id") Integer id) {
        return service.findById(id);
    }

    @GetMapping(value = "/district/{districts_id}")
    public List<Multi_Results> findMulti_ResultsByDistrictId(@PathVariable("districts_id") Integer districts_id) {
        return service.findByDistrictId(districts_id);
    }

}

