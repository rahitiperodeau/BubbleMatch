package app.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import app.model.User;
import app.model.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {

	 @Autowired
	    private UserRepository userRepository;
	    @Before
	    public void setUp() throws Exception {
	        User user1= new User("Seraphin", "Andrieuxx", "salut", false);
	        User user2= new User("Julie", "kikou", "salut", false);
	        //save user, verify has ID value after save
	        assertNull(user1.getId());
	        assertNull(user2.getId());//null before save
	        this.userRepository.save(user1);
	        this.userRepository.save(user2);
	        assertNotNull(user1.getId());
	        assertNotNull(user2.getId());
	        
	    }
	    
		@Test
	    public void testFetchData(){
	        /*Test data retrieval*/
			
			UserService myService = new UserService();
			User userToAdd= new User("Bob", "Andrieuxx", "salut", false);
			myService.addUser(userToAdd);
	        User userA = userRepository.findByName("Bob");
	        assertNotNull(userA);
	        assertEquals("Andrieuxx", userA.getSurname());
	        
	        //Test update
	        User userB = userRepository.findByName("Bob");
	        userB.setSurname("Bonhomme");
	        myService.updateUser(userB);
	        assertEquals("Bonhomme", userRepository.findByName("Bob").getSurname());
	        
	        /*Get all products, list should only have two*/
	        Iterable<User> users = userRepository.findAll();
	        int count = 0;
	        for(User p : users){
	            count++;
	        }
	        assertEquals(count, 3);
	        
	        // Test delete
	        myService.deleteUser((Integer)userA.getId());
	        users = userRepository.findAll();
	        count = 0;
	        for(User p : users){
	            count++;
	        }
	        assertEquals(count, 2);
	        
	        
	        
	    }
	
}
