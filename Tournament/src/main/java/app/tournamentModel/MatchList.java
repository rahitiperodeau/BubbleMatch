package app.tournamentModel;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "matchList")
public class MatchList {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int matchListId;
	
	//@ElementCollection(targetClass=Match.class)
	@OneToMany(cascade=CascadeType.MERGE)
	private List<Match> matchList;
	  
	public MatchList() {
		super();
		
	}

	public List<Match> getMatchList() {
		return matchList;
	}

	public void setMatchList(List<Match> matchList) {
		this.matchList = matchList;
	}

	public int getMatchListId() {
		return matchListId;
	}

	public void setMatchListId(int matchListId) {
		this.matchListId = matchListId;
	}

	
	
	
	  
	  

}
