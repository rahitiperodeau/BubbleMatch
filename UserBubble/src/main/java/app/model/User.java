package app.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Entity
@Table(name = "user")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String surname;
	private String password;
	private String email;
	private boolean isAdmin;
	private Date inscriptionDate;
	private Date lastLoginDate;
	
	
	
	public User() {
		
	}
	
	public User(String name, String surname, String password, String email, boolean isAdmin) {
		this.name= name;
		this.surname = surname;
		this.email = email;
		this.password = password;
		this.isAdmin = isAdmin;
		this.inscriptionDate = new Date();
		this.lastLoginDate = new Date();
		
	}
	
	public String getName() {
		return name;
	}
	
	public String getSurname() {
		return surname;
	}
	
	public String getEmail() {
		return email;
	}
	public boolean getIsAdmin() {
		return isAdmin;
	}
	public Date getInscriptionDate() {
		return inscriptionDate;
	}
	public Date getLastLoginDate() {
		return lastLoginDate;
	}
	public String getPassword() {
		return password;
	}
	
	
	public void setName(String name) {
		this.name =name;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setSurname(String surname) {
		this.surname =surname;
	}
	
	
	public void updatePassword(String password) {
		this.password =password;
	}
	
	public void updateLastLoginDate() {
		this.lastLoginDate = new Date();
	}
	
	public void updateInscriptionDate() {
		this.inscriptionDate = new Date();
	}
	
	public Object getId() {
		
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
		
	}

	
	
	@Override
    public String toString() {
        return "User{" +
                " name='" 				+ name 		+ '\'' +
                ", surname=" 			+ surname 	+ '\'' +
                ", isAdmin=" 			+ isAdmin 	+ '\'' +
                ", inscriptionDate=" 	+ inscriptionDate 	+ '\'' +
                ", lastLoginDate=" 		+ lastLoginDate 	+ '\'' +
                ", email=" 			+ email 	+ '\'' +
                ", password=" 			+ password 	+ 
                '}';
    }

	

	
	
}
