package lt.itakademija.database.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.itakademija.database.models.Candidates;

public interface CandidatesRepository extends JpaRepository<Candidates, Integer> {

}
