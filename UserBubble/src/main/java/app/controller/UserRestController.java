package app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.model.User;
import app.service.UserService;

@RestController
public class UserRestController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/users")
	private List<User> getAllUsers() {
		return (List<User>) userService.getAllUser();

	}
	
	@RequestMapping("/user/{id}")
	private User getUser(@PathVariable String id) {
		Optional<User> user;
		user= userService.getUser(Integer.parseInt(id));
		if(user.isPresent()) {
			return user.get();
		}
		return null;

	}
	
	@RequestMapping(method=RequestMethod.POST,value="/user")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/user/{id}")
	public void updateUser(@RequestBody User user,@PathVariable String id) {
		user.setId(Integer.valueOf(id));
		userService.updateUser(user);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/user/{id}")
	public void deleteUser(@PathVariable String id) {
		userService.deleteUser(Integer.parseInt(id));
	}
	

}
