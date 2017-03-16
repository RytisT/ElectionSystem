/**
 *
 */
package lt.itakademija.database.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.Parties;
import lt.itakademija.database.repositories.PartiesRepository;

/**
 * @author CodeCamp 2017
 */
@Service
@Transactional
public class PartiesService {

    @Autowired
    private PartiesRepository repository;


    public List<Parties> findAll() {
        return repository.findAll();
    }

    public Parties saveOrUpdate(Parties p) {
        return repository.save(p);
    }

    public void deleteById(Integer id) {
        repository.delete(id);
    }

    public Parties findById(Integer id) {
        return repository.findOne(id);
    }

    public Parties findByFileName(String fileName) {
        return repository.findByFileName(fileName);
    }


    public List<Parties> findWithMandates() { return  repository.findWithMandates();
    }
}
