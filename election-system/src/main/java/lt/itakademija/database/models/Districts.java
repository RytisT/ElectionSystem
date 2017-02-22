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
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

/**
 * @author CodeCamp 2017
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

    @Column(name = "title", unique = true)
    @NotNull(message = "DISTRICTS TITLE can not be empty")
    @Pattern(regexp = ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)", message = "DISTRICTS TITLE contains invalid characters. ")
    @Length(min = 1, max = 30, message = "DISTRICTS TITLE must not be empty and length can not be longer than {max} symbols. ")
    private String title;

    @Column(name = "number_of_voters")
    private Long number_of_voters;

    @Column(name = "address")
    //@Pattern(regexp = ".*([a-zA-Z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)", message = "DISTRICTS ADDRESS contains invalid characters. ")
    @Length(min = 0, max = 100, message = "DISTRICTS ADDRESS must not be empty and length can not be longer than {max} symbols. ")
    private String address;

    @Column(name = "VOTED_SINGLE")
    private Integer votedSingle;

    @Column(name = "VOTED_SINGLE_CORRUPT")
    private Integer votedSingleCorrupt;

    @Column(name = "VOTED_MULTI")
    private Integer votedMulti;

    @Column(name = "VOTED_MULTI_CORRUPT")
    private Integer votedMultiCorrupt;
    
    @Column(name = "VOTED_SINGLE_TIME")
    private String votedSingleTime;
    
    @Column(name = "VOTED_MULTI_TIME")
    private String votedMultiTime;


    @OneToOne(cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private District_Representatives district_representatives;

//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "DISTRICT_ID")
//    private List<District_Representatives> district_representatives;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "DISTRICT_ID")
    private List<Single_Results> single_results;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "DISTRICT_ID")
    private List<Multi_Results> multi_results;

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

    public Integer getVotedSingle() {
        return votedSingle;
    }

    public void setVotedSingle(Integer votedSingle) {
        this.votedSingle = votedSingle;
    }

    public Integer getVotedSingleCorrupt() {
        return votedSingleCorrupt;
    }

    public void setVotedSingleCorrupt(Integer votedSingleCorrupt) {
        this.votedSingleCorrupt = votedSingleCorrupt;
    }

    public Integer getVotedMulti() {
        return votedMulti;
    }

    public void setVotedMulti(Integer votedMulti) {
        this.votedMulti = votedMulti;
    }

    public Integer getVotedMultiCorrupt() {
        return votedMultiCorrupt;
    }

    public void setVotedMultiCorrupt(Integer votedMultiCorrupt) {
        this.votedMultiCorrupt = votedMultiCorrupt;
    }
   
    public List<Single_Results> getSingle_results() {
        return single_results;
    }

    public void setSingle_results(List<Single_Results> single_results) {
        this.single_results = single_results;
    }

    public List<Multi_Results> getMulti_results() {
        return multi_results;
    }

    public void setMulti_results(List<Multi_Results> multi_results) {
        this.multi_results = multi_results;
    }

	public String getVotedSingleTime() {
		return votedSingleTime;
	}

	public void setVotedSingleTime(String votedSingleTime) {
		this.votedSingleTime = votedSingleTime;
	}

	public String getVotedMultiTime() {
		return votedMultiTime;
	}

	public void setVotedMultiTime(String votedMultiTime) {
		this.votedMultiTime = votedMultiTime;
	}

	public District_Representatives getDistrict_representatives() {
		return district_representatives;
	}

	public void setDistrict_representatives(District_Representatives district_representatives) {
		this.district_representatives = district_representatives;
	}


}