import React, { Component } from 'react';
import { connect } from 'react-redux';


var axios=require('axios') ;
class TournamentInfoText extends Component {
    
      

    

    
    

    render(){
        
        return(
            <div className="tournamentPanel">
                <h1>{this.props.tournamentName}</h1>
                <h4>{this.props.description}</h4>
            </div>
        )
    }

    
}



export default connect()(TournamentInfoText);