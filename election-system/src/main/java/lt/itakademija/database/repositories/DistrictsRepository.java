
package lt.itakademija.database.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import lt.itakademija.database.models.Districts;

public interface DistrictsRepository extends JpaRepository<Districts, Integer> {

    //query for districts on specific constituency
    @Query("SELECT d FROM Districts d inner join d.single_results where d.constituency_id=:constituency_id GROUP BY  d.id")
    public List<Districts> findByConstituencies(@Param("constituency_id") Integer constituency_id);

}
