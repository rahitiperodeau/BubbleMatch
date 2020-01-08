import React, { Component } from 'react';
import UserInfo from './components/UserInfo';

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

    
}

export default User;