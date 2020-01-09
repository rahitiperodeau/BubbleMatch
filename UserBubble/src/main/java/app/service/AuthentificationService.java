package app.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.model.Authentification;
import app.model.AuthentificationRepository;


@Service
public class AuthentificationService {
	
	@Autowired
	private AuthentificationRepository authentificationRepository;

	public String addSession() {
		String randomKey = UUID.randomUUID().toString();
		boolean isTaken = true;
		while(isTaken) {
			try {
				Authentification myAuth = authentificationRepository.findBySessionId(randomKey);
				randomKey = UUID.randomUUID().toString();
			}catch(Exception NullPointerException ) {
				isTaken = false;
			}
		}
		Authentification newAuthentification = new Authentification(randomKey);
		authentificationRepository.save(newAuthentification);
		return randomKey;
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
