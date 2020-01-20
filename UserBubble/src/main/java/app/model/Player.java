package app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userPlayer")
public class Player {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private Integer userId;
	private Integer playerId;
	
	public Player(Integer userId,Integer playerId) {
		this.setPlayerId(playerId);
		this.setUserId(userId);
	}
	
	public Player() {
		
	}
	
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getPlayerId() {
		return playerId;
	}
	public void setPlayerId(Integer playerId) {
		this.playerId = playerId;
	}
	
	@Override
    public String toString() {
        return "User player{" +
                " id='" 				+ id 		+ '\'' +
                ", userId=" 			+ userId 	+ '\'' +
                ", playerId=" 			+ playerId 	+ 
                '}';
    }
}
