import React, { useState, Component } from "react";

import sessionStorage from "sessionstorage";

var axios=require('axios') ;

class SignOut extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }


    signOut(){
        axios.delete("http://localhost:8082/signOut",{
            params: {
              sessionId: sessionStorage.getItem("sessionId")
            }})
        .then((response)=>{
            sessionStorage.removeItem("sessionId");
            
            alert("you are deconnected");
            window.location = "/";
                
                
           

        })
        .catch(function(err){
            console.log(err);
        })
        .finally(function () {
          // always executed
        });
      }


    render(){
            this.signOut();
    

    
        
        
        return(          
               
                <div></div>
            
        );
    }

}
export default SignOut;

