package app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import app.service.AuthentificationService;





@CrossOrigin
@RestController
public class AuthentificationRestController {
	
	@Autowired
	private AuthentificationService authentificationService;
	
	@RequestMapping("/authOk")
	private boolean validateSessionId(@RequestParam("sessionId") String sessionId) {
		return authentificationService.validateSessionId(sessionId);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/signOut")
	public void deleteUser(@RequestParam("sessionId") String sessionId) {
		authentificationService.deleteSession(sessionId);
	}
	
	

}
