package app.tournamentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.tournamentModel.Bracket;
import app.tournamentModel.BracketRepository;

@Service
public class BracketService {
	
	
	//private String name;
	@Autowired
	private BracketRepository bracketRepository;

	
//	public List<Match> getAllMatchesBracket( ) {
//		List<Match> matchsBracket = new ArrayList<>();
//		bracketRepository.findAll().forEach(matchsBracket::add);
//		return matchsBracket;
//	}
//		
	
	public Bracket getBracket(int id) {
		return bracketRepository.findByStructureId(id);
		
	}
	
	public void addBracket(Bracket bracket) {
		
		bracketRepository.save(bracket);
	}

	public void deleteBracket(int id) {
		bracketRepository.deleteById(id);
	}

	public void updateBracket(Bracket bracket) {
	
		bracketRepository.save(bracket);
	}

	
}
	

