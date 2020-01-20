package app.model;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PlayerRepository extends CrudRepository<Player, Integer>{

	List<Player> findByUserId(Integer userId);

}
