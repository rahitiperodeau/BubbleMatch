package app.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "user")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String surname;
	private String password;
	private boolean isAdmin;
	private Date inscriptionDate;
	private Date lastLoginDate;
	
	public User() {
		this.name= "undefined";
		this.surname = "undefined";
		this.password = "undefined";
		this.isAdmin = false;
		this.inscriptionDate = new Date();
		this.lastLoginDate = new Date();
	}
	
	public User(String name, String surname, String password, boolean isAdmin) {
		this.name= name;
		this.surname = surname;
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
	public boolean getIsAdmin() {
		return isAdmin;
	}
	public Date getInscriptionDate() {
		return inscriptionDate;
	}
	public Date getLastLoginDate() {
		return lastLoginDate;
	}
	
	
	public void setName(String name) {
		this.name =name;
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
	
	@Override
    public String toString() {
        return "User{" +
                ", name='" 				+ name 		+ '\'' +
                ", surname=" 			+ surname 	+ '\'' +
                ", isAdmin=" 			+ isAdmin 	+ '\'' +
                ", inscriptionDate=" 	+ inscriptionDate 	+ '\'' +
                ", lastLoginDate=" 		+ lastLoginDate 	+ 
                '}';
    }

	public Object getId() {
		// TODO Auto-generated method stub
		return id;
	}
	
}
