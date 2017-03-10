package lt.itakademija.database.repositories;

import lt.itakademija.database.models.District_Representatives;
import org.springframework.data.jpa.repository.JpaRepository;

import lt.itakademija.database.models.Multi_Results;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Multi_Results_Repository extends JpaRepository<Multi_Results, Integer> {

    @Query("SELECT res FROM Multi_Results res where res.districts_id=:districts_id")
    public List<Multi_Results> findByDistrictId(@Param("districts_id") Integer districts_id);
}
