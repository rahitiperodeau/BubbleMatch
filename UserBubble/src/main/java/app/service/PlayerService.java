package app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.model.Player;
import app.model.PlayerRepository;

@Service
public class PlayerService {
	
	@Autowired
	PlayerRepository playerRepository;
	
	
	public List<Player> getPlayerId(Integer userId) {
		return playerRepository.findByUserId(userId);
	}

}
