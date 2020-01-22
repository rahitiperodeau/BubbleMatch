package app.tournamentModel;


import java.util.ArrayList;
import java.util.List;

import app.tournamentModel.Tournament;
public class test {
	
	public static void main(String[] args) {
		
		
	    Tournament tur = new Tournament();
	    //System.out.println(tur.toString());
	   
	    
	    int nbTeam =10;
	    for(int i = 1; i<= nbTeam ;i++) {
	    	Team team = new Team("Gros tajine"+i, i);
		    Player p1 = new Player("rospote",100*i);
		    Player p2 = new Player("rospote",200*i);
		    Player p3 = new Player("rospote",300*i);
		    Player p4 = new Player("rospote",400*i);
		    Player p5 = new Player("rospote",500*i);
	    	
		    team.addNewPlayer(p1);
		    team.addNewPlayer(p2);
		    team.addNewPlayer(p3);
		    team.addNewPlayer(p4);
		    team.addNewPlayer(p5);
		    
		    //System.out.println(team);
		    tur.addNewTeam(team);
	    }

//	    System.out.println(team.getElo());
//	     
//	    p1.setEloPlayer(p1.getEloPlayer() + 100 );
//	    System.out.println(team.getElo());
	    
	    Groups groupes = new Groups(tur.getTeams(),2);
	    //System.out.println(tur.teams);
	    //System.out.println(groupes.create().get(0));
	    //System.out.println(groupes.toString());
	    //List<Match> matchs = groupes.matches();
	    
	   // groupes.results(matchs.keySet(), );
	   // System.out.println(groupes.matches().get(0));
	    //matchs.get(0).setResult(1);
	    //System.out.println(groupes.matches().get(0));

	    //System.out.println(groupes.results(matchs.get(0)));
	    //System.out.println(groupes.groups.get(0).values());
	    
	    
	    //System.out.println(groupes.groups);
	    List<MatchList> matchListInit = new ArrayList<>();
	    Bracket bracket = new Bracket(matchListInit);
	    System.out.println(tur.getTeams());
	    //List<List<Match>> bra = new ArrayList<>();
	    //System.out.println(bracket.toString());
	    //System.out.println(bracket.createBracket2(bracket.getBracket(), tur.getTeams()));
	    System.out.println(bracket.getBracket());

	    List<MatchList> mat = bracket.createBracket2(matchListInit,tur.getTeams());
	     mat.get(0).getMatchList().get(6).setResult(2);
	    mat.get(0).getMatchList().get(7).setResult(2);
	     System.out.println(bracket.results(mat,tur.getTeams()));
		    System.out.println(tur.getTeams());

	    //System.out.println(bracket.results(mat).get(1));


	  }
}
