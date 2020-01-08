import React, { Component } from 'react';
import './App.css';


import Login from './components/login/Login';
import Home from './components/home/Home';
import Profil from './components/profil/Profil';
import SignUp from './components/signUp/SignUp';
import { BrowserRouter as Router,Route} from "react-router-dom";






class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/profil" component={Profil} />  
        <Route path="/signUp" component={SignUp} />    
      </Router>
    )
  }

}


export default App;
