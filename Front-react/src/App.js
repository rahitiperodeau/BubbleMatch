import React, { Component } from 'react';
import './App.css';


import SignOut from './components/auth/signOut/SignOut';
import Login from './components/auth/login/Login';
import SignUp from './components/auth/signUp/SignUp';
import Home from './components/home/Home';
import Chatbot from './components/chatBot/Chatbot';
import Tournoi from './components/tournoi/Tournoi';
import Profil from './components/profil/Profil';
import AutresTournois from './components/autresTournois/AutresTournois';
import UserModel from './components/commonModel/user/components/UserModel';
import User from './components/commonModel/user/User';

import { BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import {PrivateRoute} from "./components/auth/PrivateRoute";
import { createStore } from'redux';
import {Provider} from 'react-redux';
import globalReducer from './reducers';
import InscriptionTournoi from './components/inscriptionTournoi/InscriptionTournoi';
import TopBar from './components/home/topSide/TopBar';
import NotFound from './components/auth/NotFound'

import sessionStorage from "sessionstorage";

let nUser = new UserModel();

const initialStore = {
  userReducer : nUser.state

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
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/signIn" component={Login} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute path="/chatbot" component={Chatbot}/>
            <PrivateRoute path="/tournoi" component={Tournoi}/>
            <PrivateRoute path="/profil" component={Profil} />  
            <Route path="/signUp" component={SignUp} /> 
            <PrivateRoute path="/signOut" component={SignOut} />  
            <PrivateRoute path="/autresTournois" component={AutresTournois}/>    
            <PrivateRoute path="/inscriptionTournoi" component={InscriptionTournoi}/>

            <PrivateRoute path="/myAccount" component={User}/>
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </Provider>

      </div> 
      
    )
  }

}


export default App;
