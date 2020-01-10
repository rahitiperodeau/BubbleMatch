package app.tournamentModel;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Bracket extends StructureT{
	
	private List<List<Match>> bracket;
	
	public Bracket(List<Team> teams) {
		super(teams);
		this.bracket = new ArrayList<>();
	}

	public List<List<Match>> createBracket(List<Team> teamsQualified) {
		List<Match> bracketInf= new ArrayList<>();
		
		for(int i = 0; i<= teamsQualified.size()-1; i++) {
			Match match = new Match(teamsQualified.get(i).getTeam_Id(), teamsQualified.get(i+1).getTeam_Id());
			bracketInf.add(match);
			//System.out.println(match);
			i= i+1;
		}
		bracket.add(bracketInf);
		return bracket;
	}
	
	public List<List<Match>> results(List<Match> ResBracket) {
		List<Team> teamsQualified = new ArrayList<>();

		for(int i = 0; i<= ResBracket.size()-1; i++) {
			List<Match> NextBracket = new ArrayList<>();
			
			if(ResBracket.get(i).getResult() == 0) {
				System.out.println("Not played");
			}
			if(ResBracket.get(i).getResult() == 1) {
				//System.out.println(ResBracket.get(i));
				Team teamQualified = findTeamById(ResBracket.get(i).getTeam_id1());
				System.out.println(teamsQualified);
				teamsQualified.add(teamQualified);
			}
		}
		bracket = createBracket(teamsQualified);
		return(bracket);
	}

	@Override
	public String toString() {
		return "Bracket [bracket=" + bracket + "]";
	}


	
}
