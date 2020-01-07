package app.repository;

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
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;
    @Before
    public void setUp() throws Exception {
    	userRepository.deleteAll();
    	User user1= new User("Seraphin", "Andrieuxx","seraph@live.fr", "salut", false);
        User user2= new User("Julie", "kikou","jul@live.fr", "salut", false);
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
        User userA = userRepository.findByName("Julie");
        assertNotNull(userA);
        assertEquals("kikou", userA.getSurname());
        /*Get all products, list should only have two*/
        Iterable<User> users = userRepository.findAll();
        int count = 0;
        for(User p : users){
            count++;
        }
        assertEquals(count, 2);
        userRepository.deleteAll();
    }
}
