import React, { Component } from 'react';
import './App.css';


import SignOut from './components/signOut/SignOut';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import Home from './components/home/Home';
import Chatbot from './components/chatBot/Chatbot';
import Tournoi from './components/tournoi/Tournoi';
import Profil from './components/profil/Profil';
import AutresTournois from './components/autresTournois/AutresTournois';
import User from './components/commonModel/user/User';
import { BrowserRouter as Router,Route} from "react-router-dom";
import {PrivateRoute} from "./components/auth/PrivateRoute";
import { createStore } from'redux';
import {Provider} from 'react-redux';
import globalReducer from './reducers';
import InscriptionTournoi from './components/inscriptionTournoi/InscriptionTournoi';
import TopBar from './components/home/topSide/TopBar';

import sessionStorage from "sessionstorage";

const nUser = new User();

const initialStore = {
  userReducer : nUser,

}


const store=createStore(globalReducer,initialStore);

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      
    
      
      
      
      
      
      <div>
      <div className="topBar">
        <TopBar /> 
      </div>
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/signIn" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
          <Route path="/chatbot" component={Chatbot}/>
          <Route path="/tournoi" component={Tournoi}/>
          <Route path="/profil" component={Profil} />  
          <Route path="/signUp" component={SignUp} /> 
          <Route path="/signOut" component={SignOut} />  
          <Route path="/autresTournois" component={AutresTournois}/>    
          <Route path="/inscriptionTournoi" component={InscriptionTournoi}/>
        </Router>
      </Provider>
      </div> 
      
    )
  }

}


export default App;
