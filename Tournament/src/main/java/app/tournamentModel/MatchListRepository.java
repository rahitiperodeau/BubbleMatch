package app.tournamentModel;

//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchListRepository extends CrudRepository<MatchList, Integer> {
	
	public MatchList findByMatchListId(int MatchListId);

}