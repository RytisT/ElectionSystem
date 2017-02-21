/**
 *
 */
package lt.itakademija.database.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.Districts;
import lt.itakademija.database.models.Parties;
import lt.itakademija.database.repositories.DistrictsRepository;

/**
 * @author CodeCamp 2017
 */
@Service
@Transactional
public class DistrictsService {

    @Autowired
    private DistrictsRepository repository;


    public List<Districts> findAll() {
        return repository.findAll();
    }


    public Districts saveOrUpdate(Districts d) {
        return repository.save(d);
    }

    public void deleteById(Integer id) {
        repository.delete(id);
    }

    public Districts findById(Integer id) {
        return repository.findOne(id);
    }
}
