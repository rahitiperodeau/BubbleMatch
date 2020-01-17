package app.tournamentController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.tournamentService.MatchListService;
import app.tournamentModel.MatchList;

@CrossOrigin
@RestController
public class MatchListRESTControler {
	
	
	
	@Autowired
	private MatchListService matchListService;

	@RequestMapping(method=RequestMethod.GET,value="/bracket/matchList/{id}")
	private MatchList getMatchList(@PathVariable int id ) {
		return matchListService.getMatchList(id);

	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/bracket/matchList")
	private void updateMatchList(@RequestBody MatchList matchList ) {
		matchListService.updateMatchList(matchList);
	}
	
	
}