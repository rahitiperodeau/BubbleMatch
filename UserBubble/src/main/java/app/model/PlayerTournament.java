package app.model;



public class PlayerTournament {

	private int playerId;
	private String playerName;
	private int eloPlayer;
	
	public PlayerTournament() {
		super();
		this.playerName = "Rospote";
		this.eloPlayer = 500;
	}
	
	public PlayerTournament(String playername) {
		super();
		this.playerName = playername;
		this.eloPlayer = 500;
	}
	
	public PlayerTournament(String player_name, int elo) {
		super();
		this.playerName = player_name;
		this.eloPlayer = elo;
	}
	
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

	@Override
	public String toString() {
		return "Player [playerId=" + playerId + ", playerName=" + playerName + ", eloPlayer=" + eloPlayer + "]";
	}
	


}
