package app.tournamentController;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.tournamentModel.Team;
import app.tournamentModel.Tournament;
import app.tournamentService.TournamentService;

@CrossOrigin
@RestController
public class TournamentRESTControler {
	
	@Autowired
	private TournamentService tournamentService;
	
	@RequestMapping(method = RequestMethod.GET, value="/tournaments")
	public List<Tournament> getAllTournaments(){
		List<Tournament> tournaments=new ArrayList<>();
		for(Tournament t:tournamentService.getAllTournaments()){
			tournaments.add(t);
		}
		return tournaments;
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/tournament/{id}")
	private Tournament getTournament(@PathVariable int id ) {
		return tournamentService.getTournament(id);

	}
	
	@RequestMapping(method=RequestMethod.POST,value="/tournament")
	private void addTournament(@RequestBody Tournament tournament) {
		System.out.println(tournament.toString());
		tournamentService.addTournament(tournament);

	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/tournament/{id}")
	private void deleteTournament(@PathVariable int id) {
		
		tournamentService.deleteTournament(id);

	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/tournament")
	private void updateTournament(@RequestBody Tournament tournament ) {
		tournamentService.updateTournament(tournament);

	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/tournament/{id}/addTeam")
	private void addNewTeamToTournament(@PathVariable int id, @RequestBody Team team ) throws URISyntaxException {
		tournamentService.addNewTeamToTournament(id, team);

	}
	
	
//	@RequestMapping(method = RequestMethod.GET, value="/teams")
//	public List<Team> getAllTeams(){
//		List<Team> teams=new ArrayList<>();
//		for(Team t:tournamentService.getAllTeams()){
//			teams.add(t);
//		}
//		return teams;
//	}

}