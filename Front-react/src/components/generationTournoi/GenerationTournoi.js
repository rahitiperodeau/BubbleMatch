import React, { Component } from 'react';
import GenTournoiModel from '../commonModel/genTournoi/GenTournoiModel';

class GenerationTournoi extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <GenTournoiModel/>
            </div>
        )
    }
}
export default GenerationTournoi;