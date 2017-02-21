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

import lt.itakademija.database.models.District_Representatives;
import lt.itakademija.database.models.Districts;
import lt.itakademija.database.services.District_Representatives_Service;

/**
 * @author CodeCamp 2017
 */
@RestController
@CrossOrigin
@RequestMapping(value = "/api/representatives")
public class District_Representatives_Controller {

    @Autowired
    private District_Representatives_Service service;


    @GetMapping
    public Iterable<District_Representatives> representatives() {
        return service.findAll();
    }

    @PostMapping
    public District_Representatives createOrUpdateRandidates(@RequestBody District_Representatives r) {
        return service.saveOrUpdate(r);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        service.deleteById(id);
    }

    @GetMapping(value = "/{id}")
    public District_Representatives findById(@PathVariable("id") Integer id) {
        return service.findById(id);
    }


}
