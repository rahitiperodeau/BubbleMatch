package app.tournamentService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.tournamentModel.TournamentRepository;
import app.tournamentModel.Tournament;

@Service
public class TournamentService {
	
	@Autowired
	private TournamentRepository tournamentRepository;
	private int tournament_id;
	//private String name;
	
	public List<Tournament> getAllTournaments() {
		List<Tournament> tournaments = new ArrayList<>();
		tournamentRepository.findAll().forEach(tournaments::add);
		return tournaments;
	}
		
	
	public int getTournamentId(String name) {
		return tournamentRepository.findByName(name).getId();
	}
	
	public String getTournamentName() {
		return tournamentRepository.findByTournament_id(tournament_id).getName();
	}
	
	//get teams get description get structure
}
	

