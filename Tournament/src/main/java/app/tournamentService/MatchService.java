package app.tournamentService;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.tournamentModel.Match;
import app.tournamentModel.MatchRepository;

@Service
public class MatchService {
	
	
	//private String name;
	@Autowired
	private MatchRepository matchRepository;

	
	public List<Match> getAllMatches( ) {
		List<Match> matchs = new ArrayList<>();
		matchRepository.findAll().forEach(matchs::add);
		return matchs;
	}
		
	
	public Match getMatch(int id) {
		return matchRepository.findByMatchId(id);
		
	}
	
	public void addMatch(Match match) {
		
		matchRepository.save(match);
	}

	public void deleteMatch(int id) {
		matchRepository.deleteById(id);
	}

	public void updateMatch(Match match) {
	
		matchRepository.save(match);
	}
	

	public List<Match> getAllMatchesByTeamId(int id) {
		List<Match> matchs = new ArrayList<>();
		matchRepository.findAllMatchesByTeamId1(id).forEach(matchs::add);
		matchRepository.findAllMatchesByTeamId2(id).forEach(matchs::add);		

		return matchs;
	}
	
}
	

