import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import chatBotDisplayReducer from './ChatBotDisplayReducer';
import tournoiDisplayReducer from './TournoiDisplayReducer';
import matchDisplayReducer from './MatchDisplayReducer';
import filesAvailableReducer from './FilesReducer'

const globalReducer = combineReducers({
    userReducer:userReducer,
    chatBotDisplayReducer:chatBotDisplayReducer,
    tournoiDisplayReducer:tournoiDisplayReducer,
    matchDisplayReducer:matchDisplayReducer,
    filesAvailableReducer:filesAvailableReducer
});


export default globalReducer;