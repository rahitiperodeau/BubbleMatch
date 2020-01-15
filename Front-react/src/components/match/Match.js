import React, { Component } from 'react';
import MatchModel from '../commonModel/match/MatchModel'

class Match extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <MatchModel/>
            </div>
        )
    }
}
export default Match;