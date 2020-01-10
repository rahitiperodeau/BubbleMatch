package app.tournamentModel;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int player_id;
	private String player_name;
	private int eloPlayer;
	
	public int getPlayer_id() {
		return player_id;
	}
	
	//Player_name
	public String getPlayer_name() {
		return player_name;
	}
	public void setPlayer_name(String player_name) {
		this.player_name = player_name;
	}
	
	
	//EloPlayer
	public int getEloPlayer() {
		return eloPlayer;
	}
	public void setEloPlayer(int eloPlayer) {
		this.eloPlayer = eloPlayer;
	}
	
	public Player(String player_name) {
		super();
		this.player_name = player_name;
		this.eloPlayer = 500;
	}
	@Override
	public String toString() {
		return "Player [player_id=" + player_id + ", player_name=" + player_name + ", eloPlayer=" + eloPlayer + "]";
	}
	
}
