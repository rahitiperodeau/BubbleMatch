package app.tournamentModel;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "team")
public class Team {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int teamId;
	
//	@ManyToOne
//	private Tournament tournament;
	
	@OneToMany(cascade = CascadeType.ALL)
	List<Player> players = new ArrayList<Player>();
	
    @Column(name = "Elo")
	private int elo;
    
    @Column(name = "TeamName")
	private String teamName;
    
    
	private int tournamentIdRef;
	
	
	//ID
	public int getTeamId() {
		return teamId;
	}
	

	//Team name
	public String getTeamName() {
		return teamName;
	}
	public void setTeam_name(String teamName) {
		this.teamName = teamName;
	}

	
	//Tournament id 
	public int getTournamentId() {
		return tournamentIdRef;
	}
	public void setTournamentId(int tournamentId) {
		this.tournamentIdRef = tournamentId;
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
//		this.elo = this.elo/(players.size());
		this.elo = elo;
		}

	public Team(String teamName) {
		super();
		this.teamName = teamName;
		this.tournamentIdRef = tournamentIdRef;
		this.elo = 0;
	}
	
	public Team(String teamName, int id) {
		super();
		this.teamId = id;
		this.teamName = teamName;
		this.tournamentIdRef = tournamentIdRef;
		this.elo = 0;
	}
	
	public Team(String teamName, int id, List<Player> players, int tournamentIdRef) {
		super();
		this.teamId = id;
		this.teamName = teamName;
		this.tournamentIdRef = tournamentIdRef;
		this.players = players;
		this.elo =0;
	}
	
	public Team() {
		super();
		this.teamName = "";
	}

	
	public List<Player> addNewPlayer(Player player){
		if (players.size()< 5) {
			players.add(player);
			}
		this.elo = this.elo + player.getEloPlayer();
		return(players);
	}

	
	public List<Player> DeletePlayer(Player player){
		players.remove(player);
		this.elo = this.elo - player.getEloPlayer();
		return players;
	}
	
	

	
	
}
