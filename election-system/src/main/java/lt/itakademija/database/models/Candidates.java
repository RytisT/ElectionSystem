/**
 *
 */
package lt.itakademija.database.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

/**
 * @author CodeCamp
 *         2017
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
    @NotNull(message = "Candidates NAME can not be empty")
    @Pattern(regexp = ".*([a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)", message = "Candidates NAME contains invalid characters. ")
    @Length(min = 1, max = 40, message = "Candidates NAME must not be empty and length can not be longer than {max} symbols. ")
    private String name;

    @Column(name = "last_name")
    @NotNull(message = "Candidates LAST NAME can not be empty")
    @Pattern(regexp = ".*([a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)", message = "Candidates LAST NAME contains invalid characters")
    @Length(min = 1, max = 40, message = "Candidates LAST NAME must not be empty and length can not be longer than {max} symbols. ")
    private String last_name;

    @Column(name = "personal_id", unique = true)
    @Pattern(regexp = ".*([0-9]$)", message = "Candidates PERSONAL_ID contains invalid characters. Only numbers accepted. ")
    @Length(min = 11, max = 11, message = "Candidates PERSONAL_ID must be exacly {max} characters in length. ")
    private String personal_id;

    @Column(name = "date_of_birth")
    @NotNull(message = "Candidates DATE OF BIRTH can not be empty")
    private Date date_of_birth;

    @Column(name = "description")
    //@Pattern(regexp = ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)", message = "Candidates DESCRIPTION contains invalid characters. ")
    @Length(min = 0, max = 300, message = "Candidates DESCRIPTION length can not be longer than {max} symbols. ")
    private String description;

    @Column(name = "party_list_seat")
    //@Pattern(regexp = ".*([0-9]$)", message = "Candidates PARTY LIST SEAT contains invalid characters. Only numbers accepted. ")
    //@Length(min = 0, max = 3, message = "Candidates PARTY LIST SEAT length can not be longer than {max} symbols. ")
    private Integer party_list_seat;

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

    public String getPersonal_id() {
        return personal_id;
    }

    public void setPersonal_id(String personal_id) {
        this.personal_id = personal_id;
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

    public Integer getParty_list_seat() {
        return party_list_seat;
    }

    public void setParty_list_seat(Integer party_list_seat) {
        this.party_list_seat = party_list_seat;
    }

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "CANDIDATES_ID")
    private List<Single_Results> single_results;


//    @ManyToOne
//    @JoinColumn(nullable = true, name= "ID")
//    private Parties partyDependencies;


    public List<Single_Results> getSingle_results() {
        return single_results;
    }

    public void setSingle_results(List<Single_Results> single_results) {
        this.single_results = single_results;
    }

}
