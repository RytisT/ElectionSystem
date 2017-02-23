package lt.itakademija.database.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import lt.itakademija.database.models.Constituency;
public interface Constituencies extends JpaRepository<Constituency, Integer> {
    
}
