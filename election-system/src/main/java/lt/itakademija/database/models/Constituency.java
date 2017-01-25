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
 * @author CodeCamp
 * 2017
 */

@Entity
@Table(name = "constituency")
public class Constituency {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;

	@Column(name = "title")
	@NotNull
	@Length(min = 1, max = 30)
	private String title;
	
		

//	public Constituency(Integer id, String title) {
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
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "CONSTITUENCY_ID")
	private List<Districts> districts;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "CONSTITUENCY_ID")
	private List<Candidates> candidates;



	public List<Districts> getDistricts() {
		return districts;
	}

	public void setDistricts(List<Districts> districts) {
		this.districts = districts;
	}

	public List<Candidates> getCandidates() {
		return candidates;
	}

	public void setCandidates(List<Candidates> candidates) {
		this.candidates = candidates;
	}


}
