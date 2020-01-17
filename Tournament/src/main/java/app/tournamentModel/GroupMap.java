package app.tournamentModel;

import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "groupMap")
public class GroupMap {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int GroupMapId;
	
	@ElementCollection(targetClass=Team.class)
		private Map<Team,Integer> groupMap;
	  
	public GroupMap() {
		super();
		
	}

	public Map<Team,Integer> getGroupMap() {
		return groupMap;
	}

	public void setMatchList(Map<Team,Integer> groupMap) {
		this.groupMap = groupMap;
	}

	public void put(Team team, int i) {
		groupMap.put(team, 0);
	}

	public int size() {
		return groupMap.size();
	}

	public Set<Team> keySet() {
		return groupMap.keySet();
	}

	public boolean containsKey(Team findTeamById) {
		return groupMap.containsKey(findTeamById);
	}

	public int get(Team findTeamById) {
		// TODO Auto-generated method stub
		return get(findTeamById);
	}
	  
	  

}
