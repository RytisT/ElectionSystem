/**
 *
 */
package lt.itakademija.database.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

/**
 * @author CodeCamp 2017
 */
@Entity
@Table(name = "District_Representatives")
public class District_Representatives {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "district_id")
    private Integer district_id;

    @Column(name = "name")
    @NotNull
    @Pattern(regexp = ".*([a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)", message = "District Representative NAME contains invalid characters. ")
    @Length(min = 1, max = 40, message = "District Representative NAME must not be empty and length can not be longer than {max} symbols. ")
    private String name;

    @Column(name = "last_name")
    @NotNull
    @Pattern(regexp = ".*([a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)", message = "District Representative LAST NAME contains invalid characters. ")
    @Length(min = 1, max = 40, message = "District Representative LAST NAME must not be empty and length can not be longer than {max} symbols. ")
    private String last_name;

    @Column(name = "login")
    @Pattern(regexp = ".*([a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)", message = "District Representative LOGIN contains invalid characters. ")
    @Length(min = 1, max = 30, message = "District Representative LOGIN must not be empty and length can not be longer than {max} symbols. ")
    private String login;

    @Column(name = "password")
    //@Pattern(regexp = ".*([a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ„“]$)", message = "District Representative PASSWORD contains invalid characters. ")
    @Length(min = 1, max = 20, message = "District Representative PASSWORD must not be empty and length can not be longer than {max} symbols. ")
    private String password;

    // public District_Representatives(Integer id, Integer district_id, String
    // name, String last_name) {
    // this.id = id;
    // this.district_id = district_id;
    // this.name = name;
    // this.last_name = last_name;
    // }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDistrict_id() {
        return district_id;
    }

    public void setDistrict_id(Integer district_id) {
        this.district_id = district_id;
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

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
