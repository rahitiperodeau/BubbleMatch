package app.tournamentModel;


import java.util.List;
import java.util.Map;

import app.tournamentModel.Tournament;
public class test {
	
	public static void main(String[] args) {
		
		
	    Tournament tur = new Tournament();
	    //System.out.println(tur.toString());
	    Player p1 = new Player("rospote");
	    Player p2 = new Player("rospote");
	    Player p3 = new Player("rospote");
	    Player p4 = new Player("rospote");
	    Player p5 = new Player("rospote");
	    
	    int nbTeam = 8;
	    for(int i = 1; i<= nbTeam ;i++) {
	    	Team team = new Team("Gros tajine"+i, i);
		    team.addNewPlayer(p1);
		    team.addNewPlayer(p2);
		    team.addNewPlayer(p3);
		    team.addNewPlayer(p4);
		    team.addNewPlayer(p5);
		    
		    //System.out.println(team);
		    tur.addNewTeam(team);
	    }
//	   Team team = new Team("Gros tajine");
//	    team.addNewPlayer(p1);
//	    team.addNewPlayer(p2);
//	    team.addNewPlayer(p3);
//	    team.addNewPlayer(p4);
//	    team.addNewPlayer(p5);
//	    System.out.println(p1.toString());
//       Team team2 = new Team("Je TECLATE");
//        team2.addNewPlayer(p1);
//	    team2.addNewPlayer(p2);
//	    team2.addNewPlayer(p3);
//	    team2.addNewPlayer(p4);
//	    team2.addNewPlayer(p5);
//	    
//	    Team team3 = new Team("EZ");
//	        team3.addNewPlayer(p1);
//		    team3.addNewPlayer(p2);
//		    team3.addNewPlayer(p3);
//		    team3.addNewPlayer(p4);
//		    team3.addNewPlayer(p5);
//		Team team4 = new Team("YOLO");
//		       team4.addNewPlayer(p1);
//			   team4.addNewPlayer(p2);
//			   team4.addNewPlayer(p3);
//			   team4.addNewPlayer(p4);
//			   team4.addNewPlayer(p5);
//	 System.out.println(team3);

//		tur.addNewTeam(team);
//		tur.addNewTeam(team2);
//		tur.addNewTeam(team3);
//		tur.addNewTeam(team4);

//	    System.out.println(team.getElo());
//	     
//	    p1.setEloPlayer(p1.getEloPlayer() + 100 );
//	    System.out.println(team.getElo());
	    
	    Groups groupes = new Groups(2);
	    //System.out.println(tur.teams);
	    System.out.println(groupes.createGroups().get(0));
	    System.out.println(groupes.toString());

	    List<Match> matchs = groupes.Matches();
	    
	   // groupes.results(matchs.keySet(), );
	    System.out.println(groupes.Matches().get(0));
	    matchs.get(0).setResult(1);
	    System.out.println(groupes.Matches().get(0));

	    System.out.println(groupes.results(matchs.get(0)));
	    System.out.println(groupes.groups.get(0).values());

	    
	    //System.out.println(groupes.groups);



	    
	  }
}
