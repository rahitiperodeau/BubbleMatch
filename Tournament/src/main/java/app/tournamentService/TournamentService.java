package app.tournamentService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.tournamentModel.TournamentRepository;
import app.tournamentModel.Team;
//import app.tournamentModel.TeamRepository;
import app.tournamentModel.Tournament;

@Service
public class TournamentService {
	
	@Autowired
	private TournamentRepository tournamentRepository;
	//private String name;
	@Autowired
//	private TeamRepository teamRepository;

	
	public List<Tournament> getAllTournaments() {
		List<Tournament> tournaments = new ArrayList<>();
		tournamentRepository.findAll().forEach(tournaments::add);
		return tournaments;
	}
		
	
	public int getTournamentId(String name) {
		return tournamentRepository.findByName(name).getId();
	}
	
	public Tournament getTournament(int id) {
		return tournamentRepository.findById(id);
		
	}
	
	public void addTournament(Tournament tournament) {
		
		tournamentRepository.save(tournament);
	}

	public void deleteTournament(int id) {
		tournamentRepository.deleteById(id);
	}

	public void updateTournament(Tournament tournament) {
	
		tournamentRepository.save(tournament);
}


//	public List<Team> getAllTeams() {
//		List<Team> teams = new ArrayList<>();
//		teamRepository.findAll().forEach(teams::add);
//		return teams;
//	}
	
	//get teams get description get structure
}
	

