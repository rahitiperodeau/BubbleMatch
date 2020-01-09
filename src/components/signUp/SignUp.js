import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel,   FormCheck  } from "react-bootstrap";
import "./style/SignUp.css";
import sessionStorage from "sessionstorage";

var axios=require('axios') ;
sessionStorage.setItem('key', 'value');

export default function SignUp(props) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0 ;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function sendRequestSignUp() {

    let user    = {};
    user.name=name;
    user.surname=surname;
    user.isAdmin=isAdmin;
    user.email=email;
    user.password= password;
    axios.post("http://localhost:8082/user",user)
                    .then((response)=>{
                        if(response.data ){
                            alert("salut");
                            
                        }
    
                    })
                    .catch(function(err){
                        console.log(err);
                    })
                    .finally(function () {
                      // always executed
                    });
                  }
  

  return (
    
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
      <FormGroup controlId="surname" bsSize="large">
          <FormLabel>Surname</FormLabel>
          <FormControl
            autoFocus
            type="surname"
            value={surname}
            onChange={e => setSurname(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="name" bsSize="large">
          <FormLabel>Name</FormLabel>
          <FormControl
            autoFocus
            type="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>
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
        <FormGroup check="true">
            <FormLabel check="true">
            For which usages do you want use this platform (let unchecked if you are a player) ?
            <FormCheck type="checkbox" label=" As an admin" value={isAdmin} onChange={e => setIsAdmin(e.target.value)}/>
            </FormLabel>
        </FormGroup>
        <Button block bsSize="large" onClick={()=>{sendRequestSignUp()}} disabled={!validateForm()} type="submit">
          Sign-up !
        </Button>
      </form>
    </div>
  );
}
