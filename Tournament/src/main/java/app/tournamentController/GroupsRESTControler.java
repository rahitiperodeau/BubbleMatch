package app.tournamentController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import app.tournamentService.BracketService;
import app.tournamentService.GroupsService;
import app.tournamentModel.Bracket;
import app.tournamentModel.Groups;
import app.tournamentModel.Player;


@CrossOrigin
@RestController
public class GroupsRESTControler {
	
	@Autowired
	private GroupsService groupsService;
	
	@RequestMapping(method=RequestMethod.GET,value="/groups/{id}")
	private Groups getGroups(@PathVariable int id ) {
		return groupsService.getGroups(id);

	}
	
	@RequestMapping(method = RequestMethod.GET, value="/groups")
	public List<Groups> getAllGroups(){
		List<Groups> groups=new ArrayList<>();
		for(Groups t:groupsService.getAllGroups()){
			groups.add(t);
		}
		return groups;
	}
//	@RequestMapping(method=RequestMethod.PUT,value="/group")
//	private void addBracket(@RequestBody Bracket bracket) {
//		groupsService.addBracket(bracket);
//
//	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/groups/{id}")
	private void deleteGroups(@PathVariable int id) {
		
		groupsService.deleteGroups(id);

	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/groups}")
	private void updateGroups(@RequestBody Groups groups ) {
		groupsService.updateGroups(groups);
	}
	
	
	
	
}