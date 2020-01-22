import React, { Component } from 'react';
import PlayerInfo from './components/PlayerInfo';
import {perfect_player} from '../../../data/perfect_player';
import {team_blueside} from '../../../data/team_blueside';
import axios from "axios";
import {playerDisplay, championDisplay,allTeamDisplay} from '../../../actions'
import { connect } from 'react-redux';


export const api_key = "RGAPI-b63a1986-694e-4bf6-9476-2ed691136246";




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
        for(const playerNb in team_blueside.players){
            console.log(team_blueside.players[playerNb].playerName)
            this.getSummoner(team_blueside.players[playerNb].playerName)

            this.getChampions("lJY9dSXgRH23K5MBFMHGOHnsflpDT0ZE_i6mf66JrwdeOIM");

            //if(this.props.playerState!= undefined){
                
            //}
            //this.getChampions(this.props.playerState.id);
        }
        //this.getSummoner("Rospote");
        //this.getChampions();
    }



    getSummoner(playerName) {

        var self= this;
        axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${api_key}`) .then(function (response) {
          if (response.data !== undefined && response.data != ""){
              
              self.props.dispatch(playerDisplay(response.data))
              return response.data; 
          
          }else{
              alert("error no response from server")
              //res = {};
              return {}
          };
        })
        
        //const res = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Rospote?api_key=RGAPI-2466e900-3827-4ea3-afc5-3e7cf66ff42b`);
        //console.log(res.data);
    
        
        //return res;
    
    }
    getChampions(summonerId){

        //var summonerId ="lJY9dSXgRH23K5MBFMHGOHnsflpDT0ZE_i6mf66JrwdeOIM";
        var self= this;


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
      player: state.playerReducer
    }
  };
  
  //export the current classes in order to be used outside
export default connect(mapStateToProps)(Player);