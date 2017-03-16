/**
 *
 */
package lt.itakademija.database.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

/**
 * @author CodeCamp 2017
 */
@Entity
@Table(name = "Parties")
public class Parties {

    @Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", unique = true)
    private Integer id;

    @Column(name = "candidates_file", unique = true)
    private String candidates_file;

    @Column(name = "title", unique = true)
    @NotNull(message = "PARTIES TITLE can not be empty")
    @Pattern(regexp = ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“\"!,.:;-? ()]$)", message = "PARTIES TITLE contains invalid characters. ")
    @Length(min = 1, max = 200, message = "PARTIES TITLE must not be empty and length can not be longer than {max} symbols. ")
    private String title;

    @Column(name = "PARTY_CODE", unique = true)
    @Pattern(regexp = ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)", message = "PARTIES PARTY_CODE contains invalid characters. ")
    @Length(min = 1, max = 6, message = "PARTIES PARTY_CODE must not be empty and length can not be longer than {max} symbols. ")
    private String Party_Code;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "PARTY_ID")
    private List<Candidates> candidates;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "PARTY_ID")
    private List<Multi_Results> multi_results;

    public Integer getMandates() {
        return mandates;
    }

    public void setMandates(Integer mandates) {
        this.mandates = mandates;
    }

    @Column(name = "mandates")
    private Integer mandates;

//    @OneToMany(mappedBy="partyDependencies", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    private List<Candidates> members;

//	public Parties(Integer id, String title) {
//		this.id = id;
//		this.title = title;
//	}

    public String getCandidates_file() {
        return candidates_file;
    }

    public void setCandidates_file(String candidates_file) {
        this.candidates_file = candidates_file;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getParty_Code() {
        return Party_Code;
    }

    public void setParty_Code(String party_Code) {
        Party_Code = party_Code;
    }

    public List<Candidates> getCandidates() {
        return candidates;
    }

    public void setCandidates(List<Candidates> candidates) {
        this.candidates = candidates;
    }

    public List<Multi_Results> getMulti_results() {
        return multi_results;
    }

    public void setMulti_results(List<Multi_Results> multi_results) {
        this.multi_results = multi_results;
    }


}
