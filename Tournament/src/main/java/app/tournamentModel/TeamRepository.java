package app.tournamentModel;

import java.util.List;

//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import app.tournamentModel.Tournament;

@Repository
public interface TeamRepository extends CrudRepository<Team, Integer> {
	
	public Team findByTeamId(int team_id);
	public Team findByTeamName(String teamName);
	public List<Team> findByPlayers_PlayerId(Integer playerId);



}