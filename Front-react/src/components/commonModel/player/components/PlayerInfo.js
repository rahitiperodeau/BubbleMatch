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
                <div>Id:{this.props.id}</div>
                <div>Name:{this.props.name}</div>
                <div>Surname:{this.props.surname}</div>
                <div>email:{this.props.email}</div>
               
		
            </div>
        );
    }
}

export default UserInfo;