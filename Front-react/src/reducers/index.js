import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import chatBotDisplayReducer from './ChatBotDisplayReducer';
import tournoiDisplayReducer from './TournoiDisplayReducer';
import matchDisplayReducer from './MatchDisplayReducer';
import filesAvailableReducer from './FilesReducer'
import matchTabReducer from './MatchTabReducer';
import playerReducer from './PlayerReducer';
import listPlayersReducer from './ListPlayersReducer';
import teamReducer from './TeamReducer';


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
});


export default globalReducer;