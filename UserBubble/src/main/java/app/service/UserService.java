package app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.model.User;
import app.model.UserRepository;

@Service
public class UserService {


	@Autowired
	private UserRepository userRepository;
	

	public UserService() {}


	public void addUser(User user) {
		
		user.updateLastLoginDate();
		user.updateInscriptionDate();
		this.userRepository.save(user);
	}
	
	public User findUserByName(String name) {
		return this.userRepository.findByName(name);
	}
	
	public User findUserByEmail(String email) {
		return this.userRepository.findByEmail(email);
	}
	
	public Iterable<User> getAllUser(){
		return this.userRepository.findAll();
	}

	public void updateUser(User user) {
		this.userRepository.save(user);

	}
	
	public void deleteUser(Integer id) {
		this.userRepository.deleteById(id);
	}
	
	public Optional<User> getUser(Integer id) {
		return userRepository.findById(id);
	}
	
	public void deleteAllUser() {
		userRepository.deleteAll();
	}


	public boolean validateUserPassword(String email, String password) {
		boolean lReturn = false;
		User myUser = userRepository.findByEmail(email);
		try {
			lReturn = myUser.validatePassword(password);
		}catch(Exception NullPointerException) {
			System.out.println("No user in DB with this email:" + email);
		}
		return lReturn;

		
	}
	
}
