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
	    private UserService myService;
	    @Before
	    public void setUp() throws Exception {
	    	myService.deleteAllUser();
	        User user1= new User("Seraphin", "Andrieuxx","seraph@live.fr", "salut", false);
	        User user2= new User("Julie", "kikou","jul@live.fr", "salut", false);
	        //save user, verify has ID value after save
	        assertNull(user1.getId());
	        assertNull(user2.getId());//null before save
	        myService.addUser(user1);
	        myService.addUser(user2);
	        assertNotNull(user1.getId());
	        assertNotNull(user2.getId());
	        
	    }
	    
		@Test
	    public void testFetchData(){
	        /*Test data retrieval*/
			
			
			User userToAdd= new User("Bob", "Andrieuxx","bob@test.com", "salut", false);
			myService.addUser(userToAdd);
	        User userA = myService.findUserByEmail("bob@test.com");
	        assertNotNull(userA);
	        assertEquals("Andrieuxx", userA.getSurname());
	        
	        //Test update
	        User userB = myService.findUserByName("Bob");
	        userB.setSurname("Bonhomme");
	        myService.updateUser(userB);
	        assertEquals("Bonhomme", myService.findUserByName("Bob").getSurname());
	        
	        /*Get all products, list should only have two*/
	        Iterable<User> users = myService.getAllUser();
	        int count = 0;
	        for(User p : users){
	            count++;
	        }
	        assertEquals(count, 3);
	        
	        // Test delete
	        myService.deleteUser((Integer)userA.getId());
	        users = myService.getAllUser();
	        count = 0;
	        for(User p : users){
	            count++;
	        }
	        assertEquals(count, 2);
	        
	        myService.deleteAllUser();
	        
	    }
	
}
