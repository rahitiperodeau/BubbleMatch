import React, { Component } from 'react';

import { Button, FormGroup, FormControl, FormLabel  } from "react-bootstrap";
import { connect } from 'react-redux';
import './UserInfo.css';

var axios=require('axios') ;
class UserInfo extends Component{

    constructor(props){
        super(props);
        this.state={
         user : {
           email:this.props.user.email,
           name:this.props.user.name,
           surname:this.props.user.surname,
           password:""
         }
            
        }
    }

    handleSubmit(event) {
        event.preventDefault();
      }

    checkPassword(){
      let oldPassword = document.getElementById("oldPassword").value;
      let newPassword = document.getElementById("newPassword").value;
      if(oldPassword.length < 5){
        alert("the password is too short, please use a longer")
      }else{
        if(oldPassword===newPassword){
          this.sendRequestUpdateAccount(newPassword)
  
        }else{
          alert("the both password don't match please refill the form :)")
        }
      }
      
    }

    sendRequestUpdateAccount(newPassword) {

        let user    = this.state.user;
        user.password = newPassword;
        axios.put("http://localhost:8082/user",user)
                        .then((response)=>{
                            if(response.data === ""){
                                window.location  = "/home"
                                
                            }else{
                              alert(response.data)
                            }
        
                        })
                        .catch(function(err){
                            console.log(err);
                        })
                        .finally(function () {
                          // always executed
                        });
                      }

    render(){
        return(
            
               
                <div className="SignUp">


      <h3>To change the password please fill this form</h3>

      <form >
      <FormGroup controlId="surname" bsSize="large">
          <FormLabel>Surname : {this.props.user.surname}</FormLabel>
        </FormGroup>
        

      
        <FormGroup controlId="name" bsSize="large">
          <FormLabel>Name : {this.props.user.name}</FormLabel>
        </FormGroup>
 
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email : {this.props.user.email}</FormLabel>
         
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>New password</FormLabel>
          <FormControl
           id="oldPassword"
            
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            id="newPassword"
            
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" onClick={()=>{this.checkPassword()}}  >
          Update my password :)!
        </Button>
        </form>
        
        
    </div>
		
            
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.userReducer.user
    }
  };

  
  //export the current classes in order to be used outside
export default connect(mapStateToProps)(UserInfo);