import { combineReducers } from 'redux';
import userReducer from './userReducer';
import chatBotDisplayReducer from './chatBotDisplayReducer';

const globalReducer = combineReducers({
    userReducer:userReducer,
    chatBotDisplayReducer:chatBotDisplayReducer,
});


export default globalReducer;