
import { combineReducers } from 'redux';


import userReducer from './userReducer';

const globalReducer = combineReducers({
    userReducer     : userReducer,
    
});

export default globalReducer;