package app.tournamentModel;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import java.lang.Math;
@Entity
@Table(name = "brackets")
public class Bracket extends StructureT  {
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private int bracketId;
	
    //@ElementCollection(targetClass=MatchList.class)
	@OneToMany(cascade=CascadeType.ALL)
	private List<MatchList> bracket;
	
	public Bracket(List<MatchList> matchLists) {
		super();
		this.bracket = matchLists;
	}
	public Bracket() {
		super();
		this.bracket = new ArrayList<MatchList>();

	}
	
	
	public List<MatchList> createBracket2(List<MatchList> Resbracket, List<Team> teamsQualified){
		int tailleTeams = teamsQualified.size();
		int tailleBracket =0;
		int nbEquipesFictives=0;
		int nbEquipesTour1 = 0;
		int q = tailleTeams;
		int step = Resbracket.size();
		System.out.println(teamsQualified);

		if(step ==0) {
			/////Sort with elo the list of teams when it's step 0 

           

		}
		System.out.println(teamsQualified);

		if(tailleTeams % 2 != 0) {
			q = tailleTeams -1;
		} 
		while(!((Math.log(q)/Math.log(2)) == Math.floor((Math.log(q)/Math.log(2))))) {
			{

			//System.out.println((Math.log(q)/Math.log(2)) != Math.floor((Math.log(q)/Math.log(2))));
			q = q -2;
			//System.out.println(q);

			//System.out.println(tailleTeams);
			}
			

			tailleBracket = q *2;
			//System.out.println(tailleBracket);

			nbEquipesFictives= tailleBracket - tailleTeams;
			//System.out.println(nbEquipesFictives);

			nbEquipesTour1 = q - nbEquipesFictives;
			//System.out.println(nbEquipesTour1);
		}
		if((Math.log(tailleTeams)/Math.log(2)) == Math.floor((Math.log(tailleTeams)/Math.log(2)))) {
			tailleBracket = tailleTeams;
			nbEquipesTour1 = tailleTeams;
			nbEquipesFictives = 0;
		}
		
		//System.out.println(nbEquipesFictives);
		//System.out.println(nbEquipesTour1);

		MatchList bracketInf= new MatchList();
		
		
		System.out.println(step);
		for(int i = 0; i<=tailleBracket-1; i++) {
			if(i<= nbEquipesFictives-1) {
				Team GhostTeam= new Team();
				//System.out.println(teamsQualified.size());

				Match match = new Match(teamsQualified.get(i).getTeamId(), 0,0, step);
				//System.out.println(match);

				bracketInf.getMatchList().add(match);
				//System.out.println(match);
			} 
			if( tailleTeams>i  && i> nbEquipesFictives-1 && step > 0){
				//System.out.println(i);

				Match match = new Match(teamsQualified.get(i).getTeamId(),  teamsQualified.get(i+1).getTeamId(),0, step );
				i=i+1;
				bracketInf.getMatchList().add(match);
			}
			if( (tailleBracket/2) > i  && i> nbEquipesFictives-1 && step==0 ){
				//System.out.println(i);

				int a = tailleBracket - i -1;

				Match match = new Match(teamsQualified.get(i).getTeamId(),  teamsQualified.get(a).getTeamId(),0, step );
				//i=i+1;
				bracketInf.getMatchList().add(match);
			}
			
		}
		Resbracket.add(bracketInf);
		System.out.println(bracket);

		return Resbracket;
	}
	
	public List<MatchList> getBracket() {
		return bracket;
	}
	
	public List<MatchList> results(List<MatchList> ResBracket, List<Team> teams) {
		List<Team> teamsQualified = new ArrayList<>();
		int step =ResBracket.size()-1;
		//System.out.println(step);

		for(int i = 0; i<= ResBracket.get(step).getMatchList().size() -1; i++) {
			List<Match> NextBracket = new ArrayList<>();
			
			if(ResBracket.get(step).getMatchList().get(i).getResult() == 0) {
				//System.out.println("Not played");
			}
			
			if(ResBracket.get(step).getMatchList().get(i).getResult() == 1 || ResBracket.get(step).getMatchList().get(i).getTeamId2() == 0 ) {
				//System.out.println(ResBracket.get(i));
				Team teamQualified = findTeamById(ResBracket.get(step).getMatchList().get(i).getTeamId1(), teams);
				findTeamById(ResBracket.get(step).getMatchList().get(i).getTeamId1(),teams).setEloVictoires(10);
				teamsQualified.add(teamQualified);

			}
			if(ResBracket.get(step).getMatchList().get(i).getResult() == 2 || ResBracket.get(step).getMatchList().get(i).getTeamId1() == 0 ) {
				//System.out.println(ResBracket.get(i));
				Team teamQualified = findTeamById(ResBracket.get(step).getMatchList().get(i).getTeamId2(), teams);
				findTeamById(ResBracket.get(step).getMatchList().get(i).getTeamId2(),teams).setEloVictoires(10);

				teamsQualified.add(teamQualified);

			}
		}
		System.out.println(teamsQualified.size());
		
		if(ResBracket.get(ResBracket.size()-1).getMatchList().size() == teamsQualified.size()) {
			System.out.println(teamsQualified);

		      bracket = createBracket2(ResBracket, teamsQualified);
		}

		return(bracket);
	}
	@Override
	public String toString() {
		return "Bracket [bracket=" + bracket + "]";
	}
	
}
