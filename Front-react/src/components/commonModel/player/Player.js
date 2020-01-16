import React, { Component } from 'react';
import PlayerInfo from './components/PlayerInfo';

import { connect } from 'react-redux';


class Player extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }

        

    }

    

    render(){
        let mv =this.props.player;
        //this.getPlayerId(sessionStorage.getItem("sessionId"));
        return(
            <div className="panel-body">
                test = {this.props.player.state.name}
                <PlayerInfo
                    
                    id={this.props.player.state.id}
                    name={this.props.player.state.name}
                    profileIconId={this.props.player.state.profileIconId}
                    rank_tier={this.props.player.state.rank_tier}
                    champion_mastered_1_id={this.props.player.state.champion_mastered_1_id}
                    champion_mastered_1_squarePortraitPath={this.props.player.state.champion_mastered_1_squarePortraitPath}
                    champion_mastered_2_id={this.props.player.state.champion_mastered_2_id}
                    champion_mastered_2_squarePortraitPath={this.props.player.state.champion_mastered_2_squarePortraitPath}
                    champion_mastered_3_id={this.props.player.state.champion_mastered_3_id}
                    champion_mastered_3_squarePortraitPath={this.props.player.state.champion_mastered_3_squarePortraitPath}
			
                />
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