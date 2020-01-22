import React, { Component } from 'react';
import { connect } from 'react-redux';

class TournamentInfoText extends Component {
    
      

    

    
    

    render(){
        
        return(
            <div className="tournamentPanel">
                My Tournament :
                <h1>{this.props.tournamentName}</h1>
                <h4>{this.props.tournamentDescription}</h4>
            </div>
        )
    }

    
}



export default connect()(TournamentInfoText);