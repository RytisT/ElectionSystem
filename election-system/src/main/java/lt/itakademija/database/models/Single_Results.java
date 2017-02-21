package lt.itakademija.database.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "single_results")
public class Single_Results {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "districts_id")
    private Integer districts_id;

    @Column(name = "candidates_id")
    private Integer candidates_id;

    @Column(name = "votes")
    private Integer votes;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDistricts_id() {
        return districts_id;
    }

    public void setDistricts_id(Integer districts_id) {
        this.districts_id = districts_id;
    }

    public Integer getCandidates_id() {
        return candidates_id;
    }

    public void setCandidates_id(Integer candidates_id) {
        this.candidates_id = candidates_id;
    }

    public Integer getVote() {
        return votes;
    }

    public void setVote(Integer vote) {
        this.votes = vote;
    }


}
