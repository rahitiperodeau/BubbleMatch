package app.tournamentModel;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tournament")
public class Tournament {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int tournament_id;
	
	private String name;
	private String description;
	//private String imgurl;
	//private String contact;

	private Structure s;
	
	protected static List<Team> teams = new ArrayList<Team>();


	public Tournament() {
		name = "Nom du tournoi";
		description = "Description du tournoi";
	}
	
	public Tournament(int tournament_id, String name, String description, Structure structure) {
		super();
		this.tournament_id = tournament_id;
		this.name = name;
		this.description = description;
		this.s = structure;
	}
	public int getId() {
		return tournament_id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Structure getStructure() {
		return s;
	}
	public void setStructure(Structure structure) {
		this.s = structure;
	}
	
	//private int NbMax;
	//private String date; 
	
	
	public List<Team> addNewTeam(Team team){
		teams.add(team);
		return(teams);
	};
	
	
	public boolean CreateTournament(){
	
		return(true);
	}
	
	@Override
	public String toString() {
		return "Tournament [id=" + tournament_id+ ", name=" + name + ", description=" + description + ", structure=" + s
				+ ", teams=" + teams + "]";
	}
	
}
