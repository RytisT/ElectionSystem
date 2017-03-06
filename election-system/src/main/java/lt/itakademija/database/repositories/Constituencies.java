package lt.itakademija.database.repositories;


import lt.itakademija.database.models.Constituency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface Constituencies extends JpaRepository<Constituency, Integer> {

    @Query("SELECT c FROM Constituency c where c.candidates_file=:fileName")
    public Constituency findByFileName(@Param("fileName") String fileName);
}

