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
		this.userRepository.save(user);
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
	
	
}
