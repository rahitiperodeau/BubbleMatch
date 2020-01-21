package app.tournamentController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.tournamentService.TeamService;
import app.tournamentModel.Team;

@CrossOrigin
@RestController
public class TeamRESTControler {
	
	@Autowired
	private TeamService teamService;
	
	@RequestMapping(method = RequestMethod.GET, value="/teams")
	public List<Team> getAllTeams(){
		List<Team> teams=new ArrayList<>();
		for(Team t:teamService.getAllTeams()){
			teams.add(t);
		}
		return teams;
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/team/{id}")
	private Team getTeam(@PathVariable int id ) {
		return teamService.getTeam(id);

	}
	
	@RequestMapping(method=RequestMethod.POST,value="/team")
	private void addTeam(@RequestBody Team team) {
		teamService.addTeam(team);

	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/team/{id}")
	private void deleteTeam(@PathVariable int id) {
		
		teamService.deleteTeam(id);

	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/team")
	private void updateTeam(@RequestBody Team team ) {
		teamService.updateTeam(team);
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