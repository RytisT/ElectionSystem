/**
 * 
 */
package lt.itakademija.database.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

/**
 * @author CodeCamp 2017
 */
@Entity
@Table(name = "Parties")
public class Parties {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;

	@Column(name = "title")
	@NotNull
	@Length(min = 1, max = 50)
	private String title;
	
	@Column(name = "PARTY_CODE") 
	@Length(min = 1, max = 30)
    private String Party_Code;	

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "PARTY_ID")
	private List<Candidates> candidates;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "PARTY_ID")
	private List<Multi_Results> multi_results;
	

//	public Parties(Integer id, String title) {
//		this.id = id;
//		this.title = title;
//	}

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
