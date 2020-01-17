package app.tournamentModel;

//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BracketRepository extends CrudRepository<Bracket, Integer> {
	
	public Bracket findByStructureId(int id);

}