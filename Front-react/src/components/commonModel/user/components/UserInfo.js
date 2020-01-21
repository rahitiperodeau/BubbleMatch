import React, { Component } from 'react';

import { Button, FormGroup, FormControl, FormLabel  } from "react-bootstrap";
import { connect } from 'react-redux';
import './UserInfo.css';

var axios=require('axios') ;
class UserInfo extends Component{

    constructor(props){
        super(props);
        this.state={
         
            
        }
    }

    handleSubmit(event) {
        event.preventDefault();
      }

    sendRequestUpdateAccount() {

        let user    = {};
        /*user.name=name;
        user.surname=surname;
        user.isAdmin=isAdmin;
        user.email=email;
        user.password= password;*/
        axios.post("http://localhost:8082/user",user)
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
        <h3>To change the password please fill this form</h3>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Actual password</FormLabel>
          <FormControl
           
            
            type="oldPassword"
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>New Password</FormLabel>
          <FormControl
            
            
            type="newPassword"
          />
        </FormGroup>
        <Button block bsSize="large" onClick={()=>{this.sendRequestUpdateAccount()}}  type="submit">
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