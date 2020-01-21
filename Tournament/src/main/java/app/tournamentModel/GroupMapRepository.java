package app.tournamentModel;

//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupMapRepository extends CrudRepository<GroupMap, Integer> {
	
	public GroupMap findByGroupMapId(int GroupMapId);

}