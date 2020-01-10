package app.tournamentController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.tournamentModel.Tournament;
import app.tournamentService.TournamentService;

@CrossOrigin
@RestController
public class TournamentRESTControler {
	
	@Autowired
	private TournamentService tournamentService;
	
	@RequestMapping(method = RequestMethod.GET, value="/tournaments")
	public List<Tournament> getAllTournaments(){
		System.out.println("ICI");
		List<Tournament> tournaments=new ArrayList<>();
		for(Tournament t:tournamentService.getAllTournaments()){
			tournaments.add(t);
		}
		return tournaments;
	}
	

}