package lt.itakademija.database.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.itakademija.database.models.Single_Results;
import lt.itakademija.database.repositories.Single_Results_Repository;

@Service
@Transactional
public class Single_Results_Service {

    @Autowired
    private Single_Results_Repository repository;

    public List<Single_Results> findAll() {
        return repository.findAll();
    }

    public Single_Results saveOrUpdate(Single_Results sr) {
        return repository.save(sr);
    }

    public void deleteById(Integer id) {
        repository.delete(id);
    }

    public Single_Results findById(Integer id) {
        return repository.findOne(id);
    }

}
