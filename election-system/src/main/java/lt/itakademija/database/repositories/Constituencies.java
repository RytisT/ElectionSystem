package lt.itakademija.database.repositories;


import lt.itakademija.database.models.Constituency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Constituencies extends JpaRepository<Constituency, Integer> {
}
