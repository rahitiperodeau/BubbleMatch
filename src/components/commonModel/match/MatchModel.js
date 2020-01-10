import React, { Component } from 'react';


//model d'un match
class MatchModel extends Component{
    constructor(props){
        super(props);
        this.state={
            id:0,
            teamOne:"",
            teamTwo:"",
            winner:null,

        }
    }

    static get TEAM_ONE(){
        return "team_one";
    }
    
    static get TEAM_TWO(){
        return "team_two";
    }

    setWinner(winner){
        this.state.winner=winner;
    }


}

export default MatchModel;