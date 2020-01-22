package app.tournamentService;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.tournamentModel.Team;
import app.tournamentModel.TeamRepository;

@Service
public class TeamService {
	
	
	//private String name;
	@Autowired
	private TeamRepository teamRepository;

	
	public List<Team> getAllTeams() {
		List<Team> teams = new ArrayList<>();
		teamRepository.findAll().forEach(teams::add);
		return teams;
	}
		
	
//	public int getTeamId(String name) {
//		return teamRepository.findByName(name).getTeam_Id();
//	}
	
	public Team getTeam(int id) {
		return teamRepository.findByTeamId(id);
		
	}
	
	public void addTeam(Team team) {
		
		teamRepository.save(team);
	}

	public void deleteTeam(int id) {
		teamRepository.deleteById(id);
	}

	public void updateTeam(Team team) {
	
		teamRepository.save(team);
}
	
	//get teams get description get structure
}
	

