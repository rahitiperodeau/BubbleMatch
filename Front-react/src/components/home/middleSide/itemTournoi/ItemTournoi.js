import React, {Component} from 'react';
import {Figure} from 'react-bootstrap';

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
        console.log(this.state.tournoiState)
        this.props.dispatch(tournoiDisplay(this.state.tournoiState));
        this.setState({tournoiState:!this.state.tournoiState})
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