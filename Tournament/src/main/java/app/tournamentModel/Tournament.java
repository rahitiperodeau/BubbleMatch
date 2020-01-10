package app.tournamentModel;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tournament")
public class Tournament {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String name;
	private String description;
	//private String imgurl;
	//private String contact;
	
	@OneToOne
	private StructureT s;
	
	@OneToMany
	private List<Team> teams = new ArrayList<Team>();


	public Tournament() {
		name = "Nom du tournoi";
		description = "Description du tournoi";
	}
	
	public Tournament(int tournament_id, String name, String description, StructureT structure) {
		super();
		this.id = tournament_id;
		this.name = name;
		this.description = description;
		this.s = structure;
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
	public StructureT getStructure() {
		return s;
	}
	public void setStructure(StructureT structure) {
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
		return "Tournament [id=" + id+ ", name=" + name + ", description=" + description + ", structure=" + s
				+ ", teams=" + teams + "]";
	}
	
	public List<Team> getTeams() {
		return teams;
	}

	public int getId() {
		return id;
	}

	public void setId(int tournament_id) {
		this.id = tournament_id;
	}

	public StructureT getS() {
		return s;
	}

	public void setS(StructureT s) {
		this.s = s;
	}

	public void setTeams(List<Team> teams) {
		this.teams = teams;
	}
	
	
	
}
