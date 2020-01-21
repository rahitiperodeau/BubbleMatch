package app.tournamentModel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "groups")
public class Groups extends StructureT {
	
	private int nbOfGroups;
	
	@OneToMany(cascade=CascadeType.ALL)
	List<GroupMap> groups = new ArrayList<>();
    
   // int score = 0;
    
    public List<GroupMap> initGroups(){
    	for (int i=1; i<= nbOfGroups; i++) {
    		GroupMap GroupeX = new GroupMap();
    		groups.add(GroupeX);
    	}
    	return groups;
    }
	public Groups(List<Team> teams,int nbOfGroups) {
		super(teams);
		this.nbOfGroups = nbOfGroups;
		
	}
	public Groups() {
		super();
	}
	
	
	public GroupMap getMap(int x) {
		//System.out.println(groups);
		return(groups.get(x));
	}
	public List<GroupMap> create() {	
		for(int i =1; i <= nbOfGroups; i++) {
			//System.out.println(i);
				for(int k= 0; k <= (teams.size()-1); k++) {
					//System.out.println(k);
					//System.out.println(teams.size());
					if (k% nbOfGroups == i-1 ) {
						getMap(i-1).put((teams.get(k)), 0);	
					}
				}
			}
		return(groups);
	};
	
	public List<Match> matches() {
		List<Match> matchs = new ArrayList<>();
		for(int i =0; i <= (nbOfGroups-1);i++) {
			for(int k= 0; k<= (groups.get(i).size()); k++) {
				for(int g= k+1; g <= (groups.get(i).size() -1);g++) {
					
					Team team1 = findTeamByname(groups.get(i).keySet().toArray()[k].toString());
					Team team2 = findTeamByname(groups.get(i).keySet().toArray()[g].toString());
					//System.out.println(groups.get(i).keySet().toArray()[k]);
					System.out.println(team2.getTeamName());
					System.out.println(team1.getTeamName());

					//System.out.println(groups.get(i).keySet().toArray()[k].toString());
					Match match = new Match(team1.getTeamId(),team2.getTeamId(),0,0);
					
					matchs.add(match);
				}
			}
		}
		return matchs;
	}

	public List<GroupMap> results(Match match){
		if(match.getResult() == 0 ) {
			System.out.println("Match non joué");
		}
		if(match.getResult() == 1 ) {
			int winner = match.getTeamId1();			
			for(int i=0; i<= nbOfGroups-1; i++) {
				findGroup(i,winner);
			}
		}
		if(match.getResult() ==2 ) {
			int winner = match.getTeamId1();
			for(int i=0; i<= nbOfGroups-1; i++) {
				findGroup(i,winner);
		}
		}
		return(groups);
	}
	
	
	public List<GroupMap> findGroup(int i, int winner) {
		boolean boo = groups.get(i).containsKey(findTeamById(winner));
		if(boo) {
			groups.get(i).put(findTeamById(winner),groups.get(i).get(findTeamById(winner))+1);
		}
		return(groups);
	}
	
	public int getNbOfGroups() {
		return nbOfGroups;
	}
	public void setNbOfGroups(int nbOfGroups) {
		this.nbOfGroups = nbOfGroups;
	}
	public List<GroupMap> getGroups() {
		return groups;
	}
	public void setGroups(List<GroupMap> groups) {
		this.groups = groups;
	}
	@Override
	public String toString() {
		return "Groups [nbOfGroups=" + nbOfGroups + ", groups=" + groups + "]";
	}

	
	
	
}
