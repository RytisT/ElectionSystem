package lt.itakademija.database.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.itakademija.database.models.Parties;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PartiesRepository extends JpaRepository<Parties, Integer> {

    @Query("SELECT p FROM Parties p where p.candidates_file=:fileName")
    public Parties findByFileName(@Param("fileName") String fileName);

}
