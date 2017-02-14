/**
 * 
 */
package lt.itakademija.database.models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

/**
 * @author CodeCamp
 * 2017
 */
@Entity
@Table(name = "Candidates")
public class Candidates {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;
	
	@Column(name = "constituency_id")
	private Integer constituency_id;
	
	@Column(name = "party_id")
	private Integer party_id;
	
	@Column(name = "name")
	@NotNull
	@Length(min = 1, max = 30)
	private String name;
	
	@Column(name = "last_name")
	@NotNull
	@Length(min = 1, max = 30)
	private String last_name;
	
	@Column(name = "date_of_birth")
	@NotNull
	
	private Date date_of_birth;
	
	@Column(name = "description")
	@Length(min = 0, max = 255)
	private String description;
	
		
	
//	public Candidates(Integer id, Integer constituency_id,Integer party_id, String name, String last_name, Date date_of_birth, String description) {
//		this.id = id;
//		this.constituency_id = constituency_id;
//		this.party_id = party_id;
//		this.name = name;
//		this.last_name = last_name;
//		this.date_of_birth = date_of_birth;
//		this.description = description;
//	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getConstituency_id() {
		return constituency_id;
	}

	public void setConstituency_id(Integer constituency_id) {
		this.constituency_id = constituency_id;
	}

	public Integer getParty_id() {
		return party_id;
	}

	public void setParty_id(Integer party_id) {
		this.party_id = party_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public Date getDate_of_birth() {
		return date_of_birth;
	}

	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
