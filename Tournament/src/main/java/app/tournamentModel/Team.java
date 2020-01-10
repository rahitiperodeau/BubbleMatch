package app.tournamentModel;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Team {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int team_id;
	
	private Tournament tournament;
	List<Player> players = new ArrayList<Player>();
	private int elo;
	private String team_name;
	private int tournament_id;
	
	
	//ID
	public int getTeam_Id() {
		return team_id;
	}
	

	//Team name
	public String getTeam_name() {
		return team_name;
	}
	public void setTeam_name(String team_name) {
		this.team_name = team_name;
	}

	
	//Tournament id 
	public int getTournament_id() {
		return tournament_id;
	}
	public void setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
	}

	
	//List of players
	public List<Player> getPlayers() {
		return players;
	}
	public void setPlayers(List<Player> players) {
		this.players = players;
	}

	//elo
	public int getElo() {
		return elo;
		}
	public void setElo(int elo) {
//		this.elo = 0;
//		for(int i = 0; i <= players.size(); i++){
//			this.elo = elo + players.get(i).getEloPlayer();
//		    System.out.println(getElo());
//		}
//		this.elo = this.elo/(5);
		this.elo = elo;
		}

	public Team(String team_name, int id) {
		super();
		this.team_id= id;
		this.team_name = team_name;
		this.tournament_id = tournament_id;
		this.elo = 0;
	}

	
	public List<Player> addNewPlayer(Player player){
		if (players.size()< 5) {
			players.add(player);
			}
		//setElo
		return(players);
	}

	
	public List<Player> DeletePlayer(Player player){
		players.remove(player);
		//setElo();
		return players;
	}
	
	public String teamName() {
		return(team_name);
	}
	@Override
	public String toString() {
		return team_name;
	};
	
	
}
