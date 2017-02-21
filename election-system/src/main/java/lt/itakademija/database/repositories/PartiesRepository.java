package lt.itakademija.database.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.itakademija.database.models.Parties;

public interface PartiesRepository extends JpaRepository<Parties, Integer> {

}
