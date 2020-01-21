import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import chatBotDisplayReducer from './ChatBotDisplayReducer';
import tournoiDisplayReducer from './TournoiDisplayReducer';
import matchDisplayReducer from './MatchDisplayReducer';
import displayTournamentsReducer from './DisplayTournamentsReducer';
import teamReducer from './TeamReducer';
import setIdTournamentReducer from './SetIdTournamentReducer';

const globalReducer = combineReducers({
    userReducer:userReducer,
    chatBotDisplayReducer:chatBotDisplayReducer,
    tournoiDisplayReducer:tournoiDisplayReducer,
    matchDisplayReducer:matchDisplayReducer,
    displayTournamentsReducer: displayTournamentsReducer,
    teamReducer: teamReducer,
    setIdTournamentReducer: setIdTournamentReducer
});


export default globalReducer;