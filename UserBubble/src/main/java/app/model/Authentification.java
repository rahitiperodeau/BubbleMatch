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
	
	
	public Authentification() {
		
	}
	
	public Authentification(String key) {
		this.sessionId = key;
	}

	public String getSessionId() {
		return sessionId;
	}
	
	public void setSessionId(String newSessionId) {
		this.sessionId = newSessionId;
	}
}
	
	
	