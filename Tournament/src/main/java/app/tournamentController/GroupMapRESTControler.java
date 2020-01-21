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
import app.tournamentService.GroupMapService;
import app.tournamentService.GroupsService;
import app.tournamentModel.Bracket;
import app.tournamentModel.GroupMap;
import app.tournamentModel.Groups;
import app.tournamentModel.Player;


@CrossOrigin
@RestController
public class GroupMapRESTControler {
	
	@Autowired
	private GroupMapService groupMapService;
	
	@RequestMapping(method=RequestMethod.GET,value="/groupMap/{id}")
	private GroupMap getGroupMap(@PathVariable int id ) {
		return groupMapService.getGroupMap(id);

	}
	
//	@RequestMapping(method = RequestMethod.GET, value="/groups")
//	public List<Groups> getAllGroups(){
//		List<Groups> groups=new ArrayList<>();
//		for(Groups t:groupsService.getAllGroups()){
//			groups.add(t);
//		}
//		return groups;
//	}
//	@RequestMapping(method=RequestMethod.PUT,value="/group")
//	private void addBracket(@RequestBody Bracket bracket) {
//		groupsService.addBracket(bracket);
//
//	}
	
//	@RequestMapping(method=RequestMethod.DELETE,value="/groupMap/{id}")
//	private void deleteGroupMap(@PathVariable int id) {
//		
//		groupMapService.deleteGroupMap(id);
//
//	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/groupMap}")
	private void updateGroupMap(@RequestBody GroupMap groupMap ) {
		groupMapService.updateGroupMap(groupMap);
	}
	
	
	
	
}