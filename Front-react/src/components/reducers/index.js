
import { combineReducers } from 'redux';


import userReducer from './userReducer';
import filesAvailableReducer from './filesAvailableReducer';

const globalReducer = combineReducers({
    userReducer             : userReducer,
    filesAvailableReducer    : filesAvailableReducer
    
});

export default globalReducer;