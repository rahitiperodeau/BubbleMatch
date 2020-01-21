package app.tournamentModel;

//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import app.tournamentModel.Tournament;

@Repository
public interface GroupsRepository extends CrudRepository<Groups, Integer> {
	public Groups findByStructureId(int id);





}