import React, {Component} from 'react';
import ItemChatBot from './itemChatbot/ItemChatBot';
import ItemMatch from './itemMatch/ItemMatch';
import ItemTournoi from './itemTournoi/ItemTournoi';
import {Container,Row,Col} from 'react-bootstrap';
import ChatBot from '../../chatBot/ChatBot';
import Tournoi from '../../tournoi/Tournoi';
import Match from '../../match/Match';
import { connect } from 'react-redux';
import './MiddleSide.css'
class MiddleSide extends Component{

    constructor(props){
        super(props);

    }

    itemChosen(){

        const ctState=this.props.chatbotState;
        const tournoiState=this.props.tournoiState;
        const matchState=this.props.matchState;
        let rendering = <div/>;
        
        if (ctState==true){
            rendering=<ChatBot/>;
        }
        if(tournoiState==true){
            rendering=<Tournoi/>;
        }
        if(matchState==true){
            rendering=<Match/>;
        }
        return rendering;
    }

    render(){
        
        return(
            <div className="middleSide">
            
                <div id="bulles">
                    <Row xs={1} md={6}>
                        <Col xs={1} md={6}>
                            <ItemMatch/>
                        </Col>
                        </Row>
                        <Row>
                        <Col xs={2} md={2}>
                            <ItemTournoi/>
                        </Col>
                        </Row>
                        <Row>
                        <Col xs={1} md={6}>
                            <ItemChatBot/>
                        </Col>
                    </Row>
                </div>
                <div id="bulle">
                {this.itemChosen()}

                </div>
                
            </div>
        )
    }
}
const mapStateToProps =(state,ownProps)=>{
    return{
        chatbotState: state.chatBotDisplayReducer,
        tournoiState:state.tournoiDisplayReducer,
        matchState:state.matchDisplayReducer
    }
}
export default connect(mapStateToProps)(MiddleSide);
