package app.tournamentModel;

import java.util.List;

//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchRepository extends CrudRepository<Match, Integer> {
	
	public Match findByMatchId(int matchId);

	public List<Match> findAllMatchesByTeamId1(int id);
	public List<Match> findAllMatchesByTeamId2(int id);




}