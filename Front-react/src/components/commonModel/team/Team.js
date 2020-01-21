import React, { Component } from 'react';


class Team extends Component{
    constructor(props){
        super(props);
        let id;
        let name;
        let players;
        this.state={
            id:0,
            name:"",
            players:{}
        }
    }
}

export default Team;