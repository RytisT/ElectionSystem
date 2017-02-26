
package lt.itakademija.database.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.itakademija.database.models.Single_Results;

public interface Single_Results_Repository extends JpaRepository<Single_Results, Integer> {


    //@Query("SELECT s FROM Single_Results s, Districts d WHERE s.districts_id=d.id")
    //public List<Single_Results> findByConstituencies(@Param("constituency_id") Integer constituency_id);
}
