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

import app.tournamentService.MatchService;
import app.tournamentModel.Match;

@CrossOrigin
@RestController
public class MatchRESTControler {
	
	@Autowired
	private MatchService matchService;
	
	@RequestMapping(method = RequestMethod.GET, value="/matchs")
	public List<Match> getAllMatches(){
		List<Match> matchs=new ArrayList<>();
		for(Match t:matchService.getAllMatches()){
			matchs.add(t);
		}
		return matchs;
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/matchs/{id}")
	public List<Match> getAllMatchesByTeam(@PathVariable int id){
		List<Match> matchsByTeam=new ArrayList<>();
		for(Match t:matchService.getAllMatchesByTeamId(id)){
			matchsByTeam.add(t);
		}
		return matchsByTeam;
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/match/{id}")
	private Match getMatch(@PathVariable int id ) {
		return matchService.getMatch(id);

	}
	
	@RequestMapping(method=RequestMethod.POST,value="/match")
	private void addMatch(@RequestBody Match match) {
		matchService.addMatch(match);

	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/match/{id}")
	private void deleteMatch(@PathVariable int id) {
		
		matchService.deleteMatch(id);

	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/match")
	private void updateMatch(@RequestBody Match match ) {
		matchService.updateMatch(match);
	}
	
	
	
}