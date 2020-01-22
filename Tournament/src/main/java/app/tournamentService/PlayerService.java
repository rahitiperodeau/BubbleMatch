package app.tournamentService;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.tournamentModel.Player;
import app.tournamentModel.PlayerRepository;
import app.tournamentModel.Team;
import app.tournamentModel.TeamRepository;

@Service
public class PlayerService {
	
	
	//private String name;
	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private TeamRepository teamRepository;

	
	public List<Player> getAllPlayers() {
		List<Player> players = new ArrayList<>();
		playerRepository.findAll().forEach(players::add);
		return players;
	}
		
	
//	public int getTeamId(String name) {
//		return teamRepository.findByName(name).getTeam_Id();
//	}
	
	public Player getPlayer(int id) {
		return playerRepository.findByPlayerId(id);
		
	}
	
	public void addPlayer(Player player) {
		
		playerRepository.save(player);
	}

	public void deletePlayer(int id) {
		playerRepository.deleteById(id);
	}

	public void updatePlayer(Player player) {
	
		playerRepository.save(player);
}


	public void updatePlayer(Player player, int elo) {
		player.setEloPlayer(elo);
		playerRepository.save(player);
	}


	public Integer getTournamentId(Integer playerId) {
		
		List<Team> team = teamRepository.findByPlayers_PlayerId(playerId);
		return team.get(0).getTournamentId();
	}
	
	//get teams get description get structure
}
	

