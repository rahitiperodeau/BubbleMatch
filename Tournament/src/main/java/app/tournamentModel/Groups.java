package app.tournamentModel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.lang.model.element.Element;

public class Groups extends StructureT {
	private int nbOfGroups;
	private int nbTeamsPerGroup;
	//Map<String, List<Team>> groups =  new HashMap<>();
	
	List<Map<Team,Integer>> groups = new ArrayList<>();

	public Groups(List<Team> teams,int nbOfGroups) {
		super(teams);
		this.nbOfGroups = nbOfGroups;
		for (int i=1; i<= nbOfGroups; i++) {
			Map<Team, Integer> GroupeX = new HashMap<>();
			groups.add(GroupeX);
		}
	}
	
	public Map<Team, Integer> getMap(int x) {
		//System.out.println(groups);
		return(groups.get(x));
	}
	public List<Map<Team,Integer>> create() {	
		for(int i =1; i <= nbOfGroups; i++) {
			//System.out.println(i);
				for(int k= 0; k <= (teams.size()-1); k++) {
					//System.out.println(k);
					//System.out.println(teams.size());
					if (k% nbOfGroups == i-1 ) {
						//System.out.println("wp");
						getMap(i-1).put((teams.get(k)), 0);	
					}
				}
			}
		return(groups);
	};
	
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
	
	public List<Match> matches() {
		List<Match> matchs = new ArrayList<>();
		for(int i =0; i <= (nbOfGroups-1);i++) {
			for(int k= 0; k<= (groups.get(i).size()); k++) {
				for(int g= k+1; g <= (groups.get(i).size() -1);g++) {
					
					Team team1 = findTeamByname(groups.get(i).keySet().toArray()[k].toString());
					Team team2 = findTeamByname(groups.get(i).keySet().toArray()[g].toString());
					//System.out.println(groups.get(i).keySet().toArray()[k]);
					System.out.println(team2.getTeam_name());
					System.out.println(team1.getTeam_name());

					//System.out.println(groups.get(i).keySet().toArray()[k].toString());
					Match match = new Match(team1.getTeam_Id(),team2.getTeam_Id());
					
					matchs.add(match);
				}
			}
		}
		return matchs;
	}

	public List<Map<Team,Integer>> results(Match match){
		if(match.getResult() == 0 ) {
			System.out.println("Match non joué");
		}
		if(match.getResult() == 1 ) {
			int winner = match.getTeam_id1();			
			for(int i=0; i<= nbOfGroups-1; i++) {
				findGroup(i,winner);
			}
		}
		if(match.getResult() ==2 ) {
			int winner = match.getTeam_id1();
			for(int i=0; i<= nbOfGroups-1; i++) {
				findGroup(i,winner);
		}
		}
		return(groups);
	}
	
	
	public List<Map<Team,Integer>> findGroup(int i, int winner) {
		boolean boo = groups.get(i).containsKey(findTeamById(winner));
		if(boo) {
			groups.get(i).put(findTeamById(winner),groups.get(i).get(findTeamById(winner))+1);
		}
		return(groups);
	}
	@Override
	public String toString() {
		return "Groups [nbOfGroups=" + nbOfGroups + ", nbTeamsPerGroup=" + nbTeamsPerGroup + ", groups=" + groups + "]";
	}

	
	
	
}
