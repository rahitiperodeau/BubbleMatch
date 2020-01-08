import React, {Component} from 'react';

class LoginInfo extends Component{

    constructor(props) {
        super(props);
        //creation of an initial state, a json object
        this.state = {  
            username:"",
            pwd:"",           
        };
        //binding of the function given the ability to use this
       
    }

    render(){
        return(
            <form className="App">
            <h1 className="ui dividing header"><center>Log in</center></h1>
                <div className="field">
                <center>
                    <label>Username </label>
                    <input type="text" id="username" placeholder="Username"></input>
                </center>
                </div>
                <div className="field">
                    <center>
                    <label>Password </label>
                    <input type="password" id="pwd" placeholder="*******"></input>
                    </center>
                </div>
                <center><button type="button" onClick={()=>{this.props.processInput(document.getElementById("username").value,document.getElementById("pwd").value)}} >Let's go!</button></center>
            </form>  
        );
    }
}

export default LoginInfo;
