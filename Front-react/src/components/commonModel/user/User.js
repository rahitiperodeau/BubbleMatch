import React, { Component } from 'react';
import UserInfo from './components/UserInfo';

import { connect } from 'react-redux';
import {userConnection} from '../../../actions'


var axios=require('axios') ;
class User extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }

        this.getUserId = this.getUserId.bind(this);

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
        var self = this;

        //console.log()
        var responseHttp;
        axios.get('http://localhost:8082/user/' + sessionStorage.getItem("userId"))
            .then(function (response) {
                if (response.data !== undefined && response.data != ""){
                    
                    responseHttp = response.data;
                    //selfState.name = responseHttp.name;
                    //selfState.surname = responseHttp.surname;
                    //selfState.email = responseHttp.email;
                    self.props.dispatch(userConnection(response.data))
                    
                
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
        let mv =this.props.user;
        this.getUserId(sessionStorage.getItem("sessionId"));
        return(
            <div className="panel-body">
                <UserInfo                
                 
                />
            </div>
        )
    }

    
}



export default connect()(User);