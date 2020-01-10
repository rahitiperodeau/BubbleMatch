import React, { Component } from 'react';
import UserInfo from './components/UserInfo';


var axios=require('axios') ;

class User extends Component {
    constructor(props){
        super(props);
        this.state={
            id:null,
            name:null,
            surname:null,
            password:null,
            email:null,
            isAdmin:false
        }

    }

    getUserId(sessionId){

        var self=this;
        
        if(sessionStorage.getItem("userId") == null){
            axios.get('http://localhost:8082/user', {
                params: {
                sessionId: sessionId
                }
            })
            .then(function (response) {
                if (response.data !== undefined && response.data != ""){
                                
                    sessionStorage.setItem("userId",response.data);
                    
                
                }else{
                    alert("error the session doesn't exist")
                }
                self.getUserInfo();
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  
        }else{
            this.getUserInfo();
        }
    }

    getUserInfo(){

        //this.getUserId(sessionStorage.getItem("sessionId"));
        var selfState = this.state;
        var responseHttp;
        axios.get('http://localhost:8082/user/' + sessionStorage.getItem("userId"))
            .then(function (response) {
                if (response.data !== undefined && response.data != ""){
                                
                    responseHttp = response.data;
                    selfState.name = responseHttp.name;
                    selfState.surname = responseHttp.surname;
                    selfState.email = responseHttp.email;
                    
                
                }else{
                    alert("error no response from server")
                }
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  

        

    }

    render(){

        this.getUserId(sessionStorage.getItem("sessionId"));
        return(
            <div className="panel-body">
                <UserInfo
                    id={this.state.id}
                    name={this.state.name}
                    surname={this.state.surname}
                    email={this.state.email}
                    
			
                />
            </div>
        )
    }

    
}

export default User;