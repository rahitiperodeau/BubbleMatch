package app.tournamentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.tournamentModel.GroupMap;
import app.tournamentModel.GroupMapRepository;


@Service
public class GroupMapService {
	
	
	//private String name;
	@Autowired
	private GroupMapRepository groupMapRepository;

	
//	public List<Match> getAllMatchesBracket( ) {
//		List<Match> matchsBracket = new ArrayList<>();
//		bracketRepository.findAll().forEach(matchsBracket::add);
//		return matchsBracket;
//	}
//		
	public GroupMap getGroupMap(int id) {
		return groupMapRepository.findByGroupMapId(id);
		
	}
	public void updateGroupMap(GroupMap matchList) {
	
		groupMapRepository.save(matchList);
	}

}
	

