package app.tournamentModel;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "structure")
public class StructureT {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int structure_id;
	
	//public abstract List<Map<Team,Integer>> createGroups();	
	//public abstract List<Map<Team,Integer>> createBracket();
	@OneToMany
	protected List<Team> teams;
	
	public StructureT(List<Team> teams) {
		this.teams=teams;
	}

	
    
	public Team findTeamByname(String team) {
		//System.out.println(teams);
		int a = 0;
		for(int i =0; i <= teams.size()-1;i++) {
			if(teams.get(i).getTeam_name() == team) {
				//System.out.println("okok");
				a= i;
			}
		}
		return teams.get(a);
	}
	
	
	public Team findTeamById(int id) {
		//System.out.println(teams);
		int a = 0;
		for(int i =0; i <= teams.size()-1;i++) {
			if(teams.get(i).getTeam_Id() == id) {
				a= i;
			}
		}
		return teams.get(a);
	}


}
