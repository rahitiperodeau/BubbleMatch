import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./style/Login.css";
import sessionStorage from "sessionstorage";
import {getUserId} from '../../../lib/authFonction';

var axios=require('axios') ;

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function validateForm() {

    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendRequestSignIn();
  }

  function sendRequestSignIn() {
    let myvalue = sessionStorage.getItem('key');
    let redirect = false;
    
    
    axios.get('http://localhost:8082/signIn', {
            params: {
              email: email,
              password : password
            }
          })
          .then(function (response) {
              if (response.data !== undefined && response.data != ""){
                              
                sessionStorage.setItem("sessionId",response.data);
                getUserId(sessionStorage.getItem("sessionId"));
                window.location = "/home"
                
               
              }else{
                alert("the username or password is incorrect, plese try again or contact christine.liatard@cpe.fr")
              }
              
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });  
          
          

  }

  

  return (
    <div className="Login">
      
    
    
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large"  disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
