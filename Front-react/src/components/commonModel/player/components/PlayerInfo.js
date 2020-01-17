import React, { Component } from 'react';

class PlayerInfo extends Component{

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
                <div>ProfileIconId:{this.props.profileIconId}</div>
                <div>RankTier:{this.props.rank_tier}</div>
                <div>ChampionMastered1Id:{this.props.champion_mastered_1_id}</div>
                <div>ChampionMastered1Img:<img src = {this.props.champion_mastered_1_src}/></div>
                <div>ChampionMastered2Id:{this.props.champion_mastered_2_id}</div>
                <div>ChampionMastered3Id:{this.props.champion_mastered_3_id}</div>
		
            </div>
        );
    }
}

export default PlayerInfo;