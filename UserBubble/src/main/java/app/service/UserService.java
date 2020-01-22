package app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import app.model.User;
import app.model.UserRepository;

@Service
public class UserService {


	@Autowired
	private UserRepository userRepository;
	
	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	public UserService() {}


	public String addUser(User user) {
		String lReturn = "";
		
		if(userRepository.findByEmail(user.getEmail()) == null) {
			user.updateLastLoginDate();
			user.updateInscriptionDate();
			user.updatePassword(passwordEncoder.encode(user.getPassword()));
			this.userRepository.save(user);
		}else {
			lReturn = "This email is already taken, please use another one";
		}
		return lReturn;
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
		User myUser = userRepository.findByEmail(user.getEmail());
		myUser.updatePassword(passwordEncoder.encode(user.getPassword()));
		myUser.setPseudo(user.getPseudo());
		this.userRepository.save(myUser);

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
			lReturn = passwordEncoder.matches(password, myUser.getPassword());
			myUser.updateLastLoginDate();
			userRepository.save(myUser);
		}catch(Exception NullPointerException) {
			System.out.println("No user in DB with this email:" + email);
		}
		return lReturn;

		
	}
	
}
