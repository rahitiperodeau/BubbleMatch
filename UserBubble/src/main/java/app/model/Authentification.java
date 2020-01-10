package app.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "authentification")
public class Authentification {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String sessionId;
	private Integer userId;
	
	
	public Authentification() {
		
	}
	
	public Authentification(String key) {
		this.sessionId = key;
	}
	
	public Authentification(String key,Integer userId) {
		this.sessionId = key;
		this.userId = userId;
	}

	public String getSessionId() {
		return sessionId;
	}
	
	public Integer getUserId() {
		return userId;
	}
	
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	public void setSessionId(String newSessionId) {
		this.sessionId = newSessionId;
	}
}
	
	
	