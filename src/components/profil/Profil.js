import React, { Component } from 'react';
import User from '../commonModel/user/User';
import {Card,Button} from 'react-bootstrap';
import TopBar from '../home/topSide/TopBar';

class Profil extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div>
                
                <h1>Profil</h1>
                <User 
                    /* 
                        id={this.props.user.id}
                        surname={this.props.user.surname}
                        lastname={this.props.user.lastname}
                        username={this.props.user.username}
                        mail={this.props.user.mail}
                        equipes={this.props.user.equipes}
                    */
                    id={0}
                    surname={"Johnny"}
                    lastname={"Huge"}
                    username={"jojohuge"}
                    mail={"johnny.huge@mail.com"}
                    equipes={["equipeA","equipeB","equipeC"]}
                />

                

            </div>
        )
    }
}
/*
const mapStateToProps = (state, ownProps) => {
    return {
      session: state.sessionReducer,

      user:   state.userReducer.user

    }
  };


export default connect(mapStateToProps)(Profil);
*/

export default Profil;