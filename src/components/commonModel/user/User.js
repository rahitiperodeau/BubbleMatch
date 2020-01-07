import React, { Component } from 'react';
import UserInfo from './components/UserInfo';

class User extends Component {
    constructor(props){
        super(props);
        this.state={
            id:0,
            username:"",
            surname:"",
            lastname:"",
            mail:"",
            equipes:[],
        }

        this.initUser =this.initUser.bind(this);
    }

    initUser(pUser){
        this.setState(
            {
                id:pUser.id,
                username:pUser.username,
                surname:pUser.surname,
                lastname:pUser.lastname,
                mail:pUser.mail,
                equipes:pUser.equipes

            }
        );
    }

    render(){
        return(
            <div className="panel-body">
                <UserInfo
                    id={this.props.id}
                    username={this.props.username}
                    surname={this.props.surname}
                    lastname={this.props.lastname}
                    mail={this.props.mail}
                    equipes={this.props.equipes}
                />
            </div>
        )
    }
}

export default User;