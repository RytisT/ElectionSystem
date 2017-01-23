/**
 * 
 */
package lt.itakademija.database.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

/**
 * @author CodeCamp
 * 2017
 */
@Entity
@Table(name = "Districts")
public class Districts {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;
	
	@Column(name = "constituency_id")
	private Integer constituency_id;
	
	@Column(name = "title")
	@NotNull
	@Length(min = 1, max = 50)
	private String title;

	@Column(name = "number_of_voters")
	private Long number_of_voters;

	@Column(name = "address")
	private String address;
	
	
	@OneToOne(cascade = CascadeType.ALL)
    private District_Representatives district_representatives;
	
	
	public Districts(Integer id, Integer constituency_id, String title, Long number_of_voters, String address) {
		this.id = id;
		this.constituency_id = constituency_id;
		this.title = title;
		this.number_of_voters = number_of_voters;
		this.address = address;
	}

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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Long getNumber_of_voters() {
		return number_of_voters;
	}

	public void setNumber_of_voters(Long number_of_voters) {
		this.number_of_voters = number_of_voters;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
