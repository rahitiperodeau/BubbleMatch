package app.model;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TournamentFileRepository extends CrudRepository<TournamentFile, Integer>{
	List<TournamentFile> findByTournamentId(Integer tournamentId);
}
