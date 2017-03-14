package lt.itakademija.database.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "multi_results")
public class Multi_Results {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "districts_id")
    private Integer districts_id;

    @Column(name = "party_id")
    private Integer party_id;

    @Column(name = "m_votes")
    private Integer m_votes;

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

    public Integer getParty_id() {
        return party_id;
    }

    public void setParty_id(Integer party_id) {
        this.party_id = party_id;
    }

    public Integer getM_votes() {
        return m_votes;
    }

    public void setM_votes(Integer m_votes) {
        this.m_votes = m_votes;
    }

}
