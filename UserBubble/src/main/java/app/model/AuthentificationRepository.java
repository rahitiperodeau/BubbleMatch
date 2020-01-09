package app.model;

import org.springframework.data.repository.CrudRepository;

public interface AuthentificationRepository extends CrudRepository<Authentification, Integer>{
	Authentification findBySessionId(String sessionId);
}
