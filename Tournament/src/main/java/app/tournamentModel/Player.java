package app.tournamentModel;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "player")
public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int playerId;
	private String playerName;
	private int eloPlayer;
	
	public int getPlayerId() {
		return playerId;
	}
	
	//Player_name
	public String getPlayerName() {
		return playerName;
	}
	public void setPlayerName(String player_name) {
		this.playerName = player_name;
	}
	
	
	//EloPlayer
	public int getEloPlayer() {
		return eloPlayer;
	}
	public void setEloPlayer(int eloPlayer) {
		this.eloPlayer = eloPlayer;
	}
	
	public Player(String player_name, int elo) {
		super();
		this.playerName = player_name;
		this.eloPlayer = elo;
	}
	
	public Player() {
		super();
		this.playerName = "Rospote";
		this.eloPlayer = 500;
	}
	
	@Override
	public String toString() {
		return "Player [playerId=" + playerId + ", playerName=" + playerName + ", eloPlayer=" + eloPlayer + "]";
	}
	
}
