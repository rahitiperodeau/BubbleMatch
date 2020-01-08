import React, { Component } from 'react';

class UserInfo extends Component{

    constructor(props){
        super(props);
        this.state={
         
            
        }
    }
    render(){
        return(
            <div>
                <div>Pseudo:{this.props.username}</div>
                <div>Surname:{this.props.surname}</div>
                <div>Lastname:{this.props.lastname}</div>
                
                <div>Mail: {this.props.mail}</div>
                <div>Équipes: {this.props.equipes.map((equipe)=>(
                    <div>{equipe}</div>
                ))}</div>
            </div>
        );
    }
}

export default UserInfo;