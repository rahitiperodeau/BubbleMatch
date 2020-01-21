package app.tournamentController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.tournamentService.PlayerService;
import app.tournamentModel.Player;

@CrossOrigin
@RestController
public class PlayerRESTControler {
	
	@Autowired
	private PlayerService playerService;
	
	@RequestMapping(method = RequestMethod.GET, value="/players")
	public List<Player> getAllPlayers(){
		List<Player> players=new ArrayList<>();
		for(Player t:playerService.getAllPlayers()){
			players.add(t);
		}
		return players;
	}
	
	
	
	@RequestMapping(method=RequestMethod.GET,value="/player/{id}")
	private Player getPlayer(@PathVariable int id ) {
		return playerService.getPlayer(id);
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/tournamentId/{playerId}")
	private Integer getTournamentId(@PathVariable Integer playerId ) {
		
		return playerService.getTournamentId(playerId);
	}
	
	
	@RequestMapping(method=RequestMethod.POST,value="/player")
	private void addPlayer(@RequestBody Player player) {
		playerService.addPlayer(player);

	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/player/{id}")
	private void deletePlayer(@PathVariable int id) {
		
		playerService.deletePlayer(id);

	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/player")
	private void updatePlayer(@RequestBody Player player ) {
		playerService.updatePlayer(player);
	}
	
	

}