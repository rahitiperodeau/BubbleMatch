import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./style/Login.css";
import sessionStorage from "sessionstorage";
import { connect } from 'tls';

let myvalue = sessionStorage.getItem('key');
var passwordHash = require('password-hash');

var axios=require('axios') ;

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function sendRequestSignIn() {
    let myvalue = sessionStorage.getItem('key');
    axios.get('http://localhost:8082/signIn', {
            params: {
              email: email,
              password : password
            }
          })
          .then(function (response) {
              if (response.data !== undefined && response.data != ""){
                /*vUser={
                  username:pLogin,
                  id:response.data
                }*/
                
                alert(response.data);
                /*
                vCurrentSession.updateSession(vUser);
                self.props.dispatch(openSession(vCurrentSession));
                self.props.history.push('/home')*/
              }else{
                alert("the username or password is incorrect, plese try again or contact it@cpe.fr")
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
        <Button block bsSize="large" onClick={()=>{sendRequestSignIn()}} disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
