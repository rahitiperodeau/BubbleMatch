package app.tournamentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.tournamentModel.MatchList;
import app.tournamentModel.MatchListRepository;

@Service
public class MatchListService {
	
	
	//private String name;
	@Autowired
	private MatchListRepository matchListRepository;

	
//	public List<Match> getAllMatchesBracket( ) {
//		List<Match> matchsBracket = new ArrayList<>();
//		bracketRepository.findAll().forEach(matchsBracket::add);
//		return matchsBracket;
//	}
//		
	public MatchList getMatchList(int id) {
		return matchListRepository.findByMatchListId(id);
		
	}
	public void updateMatchList(MatchList matchList) {
	
		matchListRepository.save(matchList);
	}

}
	

