package app.tournamentModel;

//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import app.tournamentModel.Tournament;

@Repository
public interface TournamentRepository extends CrudRepository<Tournament, Integer> {
	
	public Tournament findByName (String name);
	public Tournament findById (int tournament_id);



}