package app.tournamentController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.tournamentService.BracketService;
import app.tournamentModel.Bracket;


@CrossOrigin
@RestController
public class BracketRESTControler {
	
	@Autowired
	private BracketService bracketService;
	
	@RequestMapping(method=RequestMethod.GET,value="/bracket/{id}")
	private Bracket getBracket(@PathVariable int id ) {
		return bracketService.getBracket(id);

	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/bracket")
	private void addBracket(@RequestBody Bracket bracket) {
		bracketService.addBracket(bracket);

	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/bracket/{id}")
	private void deleteBracket(@PathVariable int id) {
		
		bracketService.deleteBracket(id);

	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/bracket}")
	private void updateBracket(@RequestBody Bracket bracket ) {
		bracketService.updateBracket(bracket);
	}
	
	
	
	
}