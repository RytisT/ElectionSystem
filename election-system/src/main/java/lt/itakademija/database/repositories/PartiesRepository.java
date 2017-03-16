package lt.itakademija.database.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.itakademija.database.models.Parties;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PartiesRepository extends JpaRepository<Parties, Integer> {

    @Query("SELECT p FROM Parties p where p.candidates_file=:fileName")
    public Parties findByFileName(@Param("fileName") String fileName);

    @Query("SELECT p FROM Parties p where p.mandates is not null ORDER BY p.mandates desc, p.title")
    public List<Parties> findWithMandates();
}
