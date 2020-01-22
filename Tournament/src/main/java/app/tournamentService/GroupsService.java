package app.tournamentService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.tournamentModel.TournamentRepository;
import app.tournamentModel.Groups;
import app.tournamentModel.GroupsRepository;
import app.tournamentModel.Player;
import app.tournamentModel.Team;
//import app.tournamentModel.TeamRepository;
import app.tournamentModel.Tournament;

@Service
public class GroupsService {
	
	@Autowired
	private GroupsRepository groupsRepository;
	


	public Groups getGroups(int id) {
		return groupsRepository.findByStructureId(id);
		
	}
	
//	public void addTournament(Groups tournament) {
//		
//		groupsRepository.save(tournament);
//	}

	public void deleteGroups(int id) {
		groupsRepository.deleteById(id);
	}

	public void updateGroups(Groups groups) {
	
		groupsRepository.save(groups);
}

	public List<Groups> getAllGroups() {
		List<Groups> groups = new ArrayList<>();
		groupsRepository.findAll().forEach(groups::add);
		return groups;
	}
}
	

