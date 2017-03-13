package lt.itakademija.database.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.itakademija.database.models.District_Representatives;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface District_Representatives_Repository extends JpaRepository<District_Representatives, Integer> {



    @Query("SELECT rep FROM District_Representatives rep where rep.login=:login")
    public District_Representatives findByLoginName(@Param("login") String login);

}
