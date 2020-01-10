package app.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.model.Authentification;
import app.model.AuthentificationRepository;
import app.model.User;
import app.model.UserRepository;


@Service
public class AuthentificationService {
	
	@Autowired
	private AuthentificationRepository authentificationRepository;
	
	@Autowired 
	private UserRepository userRepository;
	
	public String addSession(String email) {
		String randomKey = UUID.randomUUID().toString();
		boolean isTaken = true;
		while(isTaken) {
				if (authentificationRepository.findBySessionId(randomKey) == null) {
					isTaken = false;
				}else {
					randomKey = UUID.randomUUID().toString();
				}
		}
		Authentification newAuthentification = new Authentification(randomKey,userRepository.findByEmail(email).getId());
		authentificationRepository.save(newAuthentification);
		return randomKey;
	}
	
	public Optional<User> getUser(String sessionId) {
		Integer userId = authentificationRepository.findBySessionId(sessionId).getUserId();
		return userRepository.findById(userId);
	}
	
	public boolean validateSessionId(String sessionId) {
		boolean lReturn =false;
		try {
			Authentification myAuth = authentificationRepository.findBySessionId(sessionId);
			lReturn = true;
		}catch(Exception NullPointerException ) {
			System.out.println("Session doesn't exist or have expired");
		}
		return lReturn;
	}
	
	public void deleteSession(String sessionId) {
		Authentification sessionToDelete = authentificationRepository.findBySessionId(sessionId);
		authentificationRepository.delete(sessionToDelete);
	}
}
