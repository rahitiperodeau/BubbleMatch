import React, {Component} from 'react';
import MiddleSide from './middleSide/MiddleSide';
import './css/Home.css'
import { connect } from 'react-redux';

import {userConnection} from '../../actions'


var axios=require('axios') ;
class Home extends Component{
    constructor(props){
        super(props);
        
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
        var responseHttp;
        axios.get('http://localhost:8082/user/' + sessionStorage.getItem("userId"))
            .then(function (response) {
                if (response.data !== undefined && response.data != ""){
                    
                    responseHttp = response.data;
                    //selfState.name = responseHttp.name;
                    //selfState.surname = responseHttp.surname;
                    //selfState.email = responseHttp.email;
                    self.dispatch(userConnection(response.data))
                    
                
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
            <div className="home">
                <MiddleSide/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.userReducer
    }
  };
  
  //export the current classes in order to be used outside
export default connect(mapStateToProps)(Home);

