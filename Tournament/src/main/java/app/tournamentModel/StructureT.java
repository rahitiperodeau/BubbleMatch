package app.tournamentModel;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.InheritanceType;


@Entity
@Table(name = "structure")
@Inheritance(strategy = InheritanceType.JOINED)
public class StructureT {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int structureId;
	
	
	public int getStructureId() {
		return structureId;
	}
	public void setStructureId(int structureId) {
		this.structureId = structureId;
	}


	//public abstract List<Map<Team,Integer>> createGroups();	
	//public abstract List<Map<Team,Integer>> createBracket();
	@OneToMany
	protected List<Team> teams;
//	
//	@OneToOne
//	private Tournament tournament;
	
		public StructureT(List<Team> teams) {
		super();
		this.teams=teams;
		this.structureId = 0;
	}
	public StructureT() {
		super();
	}
	
    
	public Team findTeamByname(String team) {
		//System.out.println(teams);
		int a = 0;
		for(int i =0; i <= teams.size()-1;i++) {
			if(teams.get(i).getTeamName() == team) {
				//System.out.println("okok");
				a= i;
			}
		}
		return teams.get(a);
	}
	
	
	public Team findTeamById(int id, List<Team> teams) {
		//System.out.println(teams);
		int a = 0;
		for(int i =0; i <= teams.size()-1;i++) {
			if(teams.get(i).getTeamId() == id) {
				a= i;
			}
		}
		return teams.get(a);
	}

}
