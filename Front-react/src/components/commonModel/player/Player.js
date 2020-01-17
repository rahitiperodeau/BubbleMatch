import React, { Component } from 'react';
import PlayerInfo from './components/PlayerInfo';
import {perfect_player} from '../../../data/perfect_player';
import {team_blueside} from '../../../data/team_blueside';



import { connect } from 'react-redux';

function PlayerFunction(team){

    console.log(team.param)
 let infos_team = team.param
 console.log(infos_team)
 return(
    <PlayerInfo
        id = {infos_team.teamId}
        // id={infos_team.id}
        // name={infos_team.name}
        // profileIconId={infos_team.profileIconId}
        // rank_tier={infos_team.rank_tier}
        // champion_mastered_1_src = {"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" + infos_team.champion_mastered_1_id +".png"}
        // champion_mastered_1_id={infos_team.champion_mastered_1_id}
        // champion_mastered_2_id={infos_team.champion_mastered_2_id}
        // champion_mastered_3_id={infos_team.champion_mastered_3_id}
    >

    </PlayerInfo>
 )
}


class Player extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }

        

    }

    

    render(){
        let team_info =this.props.team
        //this.getPlayerId(sessionStorage.getItem("sessionId"));
        return(
            <div className="panel-body">
                <PlayerFunction param ={this.props}/>
                {/* <PlayerInfo
                    
                    id={this.props.id}
                    name={this.props.name}
                    profileIconId={this.props.profileIconId}
                    rank_tier={this.props.rank_tier}
                    champion_mastered_1_id={this.props.champion_mastered_1_id}
                    champion_mastered_2_id={this.props.champion_mastered_2_id}
                    champion_mastered_3_id={this.props.champion_mastered_3_id}
			
                /> */}
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