import React, {Component} from 'react';
import {Image,Figure,Button} from 'react-bootstrap';
import matchImage from '../../../../img/match.png';
import './css/ItemMatch.css';
import {matchDisplay} from '../../../../actions';
import { connect } from 'react-redux';

class ItemMatch extends Component{

    constructor(props){
        super(props);
        this.state={
            matchState:true
        }
        this.setMatchState=this.setMatchState.bind(this);
    }

    setMatchState(){
        this.props.dispatch(matchDisplay(this.state.matchState));
        this.state.matchState=!this.state.matchState;
    }
    render(){
        return(
            <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        src={matchImage}
                    />
                    <Figure.Caption className="caption">
                        <Button onClick={()=>{this.setMatchState()}}>Votre match</Button>
                    </Figure.Caption>
                </Figure>
        )
    }
}
export default connect()(ItemMatch);