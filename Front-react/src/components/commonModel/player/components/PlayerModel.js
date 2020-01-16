import React, { Component } from 'react';


class PlayerModel  extends Component {
    constructor(props){
        super(props);
        this.state={

            name:null,        
            id:null,
            profileIconId:0,
            rank_tier:null,
            champion_mastered_1_id:0,
            champion_mastered_1_squarePortraitPath:null,
            champion_mastered_2_id:0,
            champion_mastered_2_squarePortraitPath:null,
            champion_mastered_3_id:0,
            champion_mastered_3_squarePortraitPath:null,
        }


    }
}

export default PlayerModel;