package app.tournamentModel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class Groups extends Tournament {
	private int nbOfGroups;
	private int nbTeamsPerGroup;
	//Map<String, List<Team>> groups =  new HashMap<>();
	
	List<Map<String,Integer>> groups = new ArrayList<>();

	public Groups(int nbOfGroups) {
		super();
		this.nbOfGroups = nbOfGroups;
		for (int i=1; i<= nbOfGroups; i++) {
			Map<String, Integer> GroupeX = new HashMap<>();
			groups.add(GroupeX);
		}
	}
	
	public Map<String, Integer> getMap(int x) {
		//System.out.println(groups);
		return(groups.get(x));
	}
	public List<Map<String,Integer>> createGroups() {	
		for(int i =1; i <= nbOfGroups; i++) {
			//System.out.println(i);
				for(int k= 0; k <= (teams.size()-1); k++) {
					//System.out.println(k);
					//System.out.println(teams.size());
					if (k% nbOfGroups == i-1 ) {
						//System.out.println("wp");
						getMap(i-1).put((teams.get(k).getTeam_name()), 0);	
					}
				}
			}
		return(groups);
	};
	
	
	
	public Map<List<Object>, Integer> Matches() {
		Map<List<Object>, Integer> matchs = new HashMap<>();
		for(int i =0; i <= (nbOfGroups-1);i++) {
			for(int k= 0; k<= (groups.get(i).size()); k++) {
				for(int g= k+1; g <= (groups.get(i).size() -1);g++) {
					List<Object> match = new ArrayList<>();
					match.add(groups.get(i).keySet().toArray()[k]);
					match.add(groups.get(i).keySet().toArray()[g]);
					matchs.put(match , 0);
				}
			}
		}
		return matchs;
	}

	public List<Map<String,Integer>> results(List<Team> key, int result){
		if(result ==0 ) {
			System.out.println("Match non joué");
		}
		if(result == 1 ) {
			Team winner =key.get(0);
			System.out.println(key.get(0));
			groups.indexOf(key);
		}
		
		
		
		System.out.println(groups.indexOf(key));
		return(groups);
	}
	@Override
	public String toString() {
		return "Groups [nbOfGroups=" + nbOfGroups + ", nbTeamsPerGroup=" + nbTeamsPerGroup + ", groups=" + groups + "]";
	}

	
	
	
}
