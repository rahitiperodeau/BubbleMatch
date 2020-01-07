import React, { Component } from 'react';
import User from '../commonModel/user/User';

class Profil extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div>
                <div>Profil</div>
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