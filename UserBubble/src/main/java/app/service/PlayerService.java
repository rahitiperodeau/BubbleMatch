package app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.model.Player;
import app.model.PlayerRepository;
import app.model.PlayerTournament;
import app.model.UserRepository;

@Service
public class PlayerService {
	
	@Autowired
	PlayerRepository playerRepository;
	
	@Autowired
	UserRepository userRepository;
	
	
	public List<Player> getPlayerId(Integer userId) {
		return playerRepository.findByUserId(userId);
	}


	public void setPlayerUserJoint(List<PlayerTournament> playerTournamentList) {
		for(PlayerTournament player:playerTournamentList) {
			Integer userId = userRepository.findByPseudo(player.getPlayerName()).getId();
			if (userId != null) {
				Player myPlayer = new Player(userId,player.getPlayerId());
				playerRepository.save(myPlayer);
			}else {
				System.out.println("No user found with this pseudo : "+ player.getPlayerName());
			}
		}
		
	}

}
