/**
 *
 */
package lt.itakademija.database.services;

import java.util.List;
import java.util.stream.Collectors;

import lt.itakademija.database.repositories.DistrictsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.District_Representatives;
import lt.itakademija.database.models.Districts;
import lt.itakademija.database.repositories.District_Representatives_Repository;

/**
 * @author CodeCamp 2017
 */
@Service
@Transactional
public class District_Representatives_Service {

    @Autowired
    private District_Representatives_Repository repository;

    @Autowired
    private DistrictsRepository districtsRepository;

    public List<District_Representatives> findAll() {
        return repository.findAll();
    }

    public District_Representatives saveOrUpdate(District_Representatives r) {
        return repository.save(r);
    }

    public void deleteById(Integer id) {
        repository.delete(id);
    }

    public District_Representatives findById(Integer id) {
        return repository.findOne(id);
    }

    public Districts findByLoginName(String loginName) {
        return districtsRepository.findOne(repository.findByLoginName(loginName).getDistrict_id());
    }
}
