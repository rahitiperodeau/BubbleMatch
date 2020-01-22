import React, { Component } from 'react';
import PlayerInfo from './components/PlayerInfo';
import {perfect_player} from '../../../data/perfect_player';
import {team_blueside} from '../../../data/team_blueside';
import axios from "axios";
import {playerDisplay, championDisplay,allTeamDisplay, teamsDisplay} from '../../../actions'
import { connect } from 'react-redux';


export const api_key = "RGAPI-e01c0112-a698-440f-8462-420dd1a107da";




function PlayerFunction(player){

    console.log(player.param)
 return(
    <PlayerInfo
        id = {player.id}
    >

    </PlayerInfo>
 )
}


class Player extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }

        //this.firstDisplay();
        //for(const playerNb in this.props.team.players){
          //  console.log(this.props.team.players[playerNb].playerName)
            this.getSummoner(this.props.team.players[0].playerName)
            console.log(this.props.team.players[0].playerName)

            this.getChampions(this.props.player.id);
            this.props.dispatch(teamsDisplay(this.props.player));

            //if(this.props.playerState!= undefined){
                
            //}
            //this.getChampions(this.props.playerState.id);
        //}
        //this.getSummoner("Rospote");
        //this.getChampions();
    }



    getSummoner(playerName) {

        var self= this;
        axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${api_key}`) .then(function (response) {
          if (response.data !== undefined && response.data != ""){
              
              self.props.dispatch(playerDisplay(response.data));
              return response.data; 
          
          }else{
              //res = {};
              return {}
          };
        })
        
    
    }
    getChampions(summonerId){

        //var summonerId ="lJY9dSXgRH23K5MBFMHGOHnsflpDT0ZE_i6mf66JrwdeOIM";
        var self= this;

        console.log("Je commence getChampions")
        axios.get(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${api_key}`) .then(function (response) {
              if (response.data !== undefined && response.data != ""){
                  
                  console.log("Champion OK");
                  self.props.dispatch(championDisplay(response.data))
                  //teamsDisplay
                  return response.data;
    
              }else{
                  alert("error no response from server")
                  return {}
              };
            })

    }

    

    render(){
        //let team_info =this.props.team
        //this.getPlayerId(sessionStorage.getItem("sessionId"));
        
        return(
            <div className="panel-body">
                <PlayerFunction param ={this.props}/>
            </div>
        )
    }

    
}

const mapStateToProps = (state, ownProps) => {
    return {
      player: state.playerReducer,
      teams : state.teamsReducer
    }
  };
  
  //export the current classes in order to be used outside
export default connect(mapStateToProps)(Player);