import React, { Component } from 'react';
import LoginInfo from './components/LoginInfo';
import { connect } from 'tls';


class Login extends Component{

    constructor(props){
        super(props);
        this.processInput = this.processInput(this);
        this.state ={
            username:"",
            pwd:"",
        };
    }

    processInput(pUsername,pPwd){
        let self = this;
        /*let vCurrentSession = this.props.session ;
        axios.get('http://localhost:8082/authID', {
            params: {
              login: pLogin,
              pwd : pPwd
            }
          })
          .then(function (response) {
              if (response.data !== undefined){
                vCurrentSession.state.login = pLogin;
                vCurrentSession.state.userId = response.data;
                self.props.dispatch(openSession(vCurrentSession));
                self.props.history.push('/home')
              }else{
                alert("the username or password is incorrect, plese try again or contact it@cpe.fr")
              }
              
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          }); */
    }

    render(){

       /* return(
            <div>
                <div>
                    {this.props.session.state.login}
                </div>
                <LoginInfo
                    processInput  = {this.processInput}
                    signinImg     = {UserImg}
                />
            </div>
        );*/

        return(
            <div>
                <LoginInfo
                    processInput = {this.processInput}
                />
            </div>
        )
    }
}
/*
const mapStateToProps = (state, ownProps) => {
    return {
      session: state.sessionReducer
    }
  };


//export the current classes in order to be used outside
export default connect(mapStateToProps)(Login);*/

export default Login;