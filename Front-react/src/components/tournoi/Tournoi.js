import React, { Component } from 'react';
import BracketModel from '../commonModel/bracket/BracketModel';
import Poules from '../commonModel/poule/Poules';


class Tournoi extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {/*<BracketModel/>*/}
                <Poules/>
            </div>
        )
        
    }
}
export default Tournoi;