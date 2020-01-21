import React, {Component} from 'react';
import {Image,Figure,Button} from 'react-bootstrap';

import tournoiImage from '../../../../img/tournoi.png';
import './css/ItemTournoi.css';

import { connect } from 'react-redux';
import {tournoiDisplay} from '../../../../actions';

class Tournoi extends Component{

    constructor(props){
        super(props);
        this.state={
            tournoiState:true
        }
        this.setTournoiState=this.setTournoiState.bind(this);
    }

    setTournoiState(){
        this.props.dispatch(tournoiDisplay(this.state.tournoiState));
        this.state.tournoiState=!this.state.tournoiState;
    }

    render(){
        return(
            
                
                <Figure>
                    <Figure.Image
                        
                        src={tournoiImage}
                        onClick={()=>{this.setTournoiState()}}
                        id="image"
                    />
                    
                </Figure>
        )
    }
}
export default connect()(Tournoi);