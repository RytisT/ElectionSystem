package lt.itakademija.database.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
@RequestMapping(value = "/api/candidates")
public class CandidatesController {

    @Autowired
    private CandidatesService service;

    @GetMapping
    public List<Candidates> candidates() {
        return service.findAll();
    }

    @PostMapping
    public Candidates createOrUpdateCandidates(@RequestBody Candidates c) {
        return service.saveOrUpdate(c);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteCandidateById(@PathVariable("id") Integer id) {
        service.deleteById(id);
    }

    @DeleteMapping(value = "/party/{id}")
    public void deletePartyCandidates(@PathVariable("id") Integer id) {
        service.deletePartyCandidates(id);
    }

    @GetMapping(value = "/{id}")
    public Candidates findCandidateById(@PathVariable("id") Integer id) {
        return service.findById(id);
    }

    //search candidates by constituency ID
    @GetMapping(value = "/search")
    public List<Candidates> findByConstituency(@RequestParam(value = "constituency_id", required = false) Integer constId,
                                               @RequestParam(value = "name", required = false) String candidateName,
                                               @RequestParam(value = "last_name", required = false) String candidateLastName,
                                               @RequestParam(value = "party_id", required = false) Integer partyId) {
        if (constId != null) {
            return service.findByConstituency(constId);
        } else if (candidateName != null) {
            return service.findByFirstName(candidateName);
        } else if (candidateLastName != null) {
            return service.findByLastName(candidateLastName);
        } else if (partyId != null) {
            return service.findByPartyId(partyId);
        }
        return null;
    }


}

