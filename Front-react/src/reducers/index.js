import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import chatBotDisplayReducer from './ChatBotDisplayReducer';
import tournoiDisplayReducer from './TournoiDisplayReducer';
import matchDisplayReducer from './MatchDisplayReducer';
import displayTournamentsReducer from './DisplayTournamentsReducer';
import teamReducer from './TeamReducer';
import setIdTournamentReducer from './SetIdTournamentReducer';
import filesAvailableReducer from './FilesReducer';
import filesAvailableReducer from './FilesReducer'
import matchTabReducer from './MatchTabReducer';
import playerReducer from './PlayerReducer';
import listPlayersReducer from './ListPlayersReducer';
import teamReducer from './TeamReducer';

import setInfoTournoiGenReducer from './SetInfoTournoiGenReducer';
import setBracketReducer from './SetBracketReducer';
import team1InfosReducer from './Team1InfosReducer';
import team2InfosReducer from './Team2InfosReducer';
import matchBracketReducer from './MatchBracketReducer';
import allTeamsReducer from './AllTeamsReducer';
import equipesTabIndexReducer from './EquipesTabIndexReducer';
import setTournamentsListReducer from './SetTournamentsListReducer';


const globalReducer = combineReducers({
    userReducer:userReducer,
    chatBotDisplayReducer:chatBotDisplayReducer,
    tournoiDisplayReducer:tournoiDisplayReducer,
    matchDisplayReducer:matchDisplayReducer,
    filesAvailableReducer:filesAvailableReducer,
    matchTabReducer:matchTabReducer,
    playerReducer:playerReducer,
    listPlayersReducer:listPlayersReducer,
    teamReducer:teamReducer
    displayTournamentsReducer: displayTournamentsReducer,
    teamReducer: teamReducer,
    setIdTournamentReducer: setIdTournamentReducer,
    filesAvailableReducer:filesAvailableReducer,
    setInfoTournoiGenReducer:setInfoTournoiGenReducer,
    setBracketReducer:setBracketReducer,
    team1InfosReducer:team1InfosReducer,
    team2InfosReducer:team2InfosReducer,
    matchBracketReducer:matchBracketReducer,
    allTeamsReducer:allTeamsReducer,
    equipesTabIndexReducer:equipesTabIndexReducer,
    setTournamentsListReducer:setTournamentsListReducer
});


export default globalReducer;