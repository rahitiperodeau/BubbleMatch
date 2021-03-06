import React, {Component} from 'react';
import ItemChatBot from './itemChatbot/ItemChatBot';
import ItemMatch from './itemMatch/ItemMatch';
import ItemTournoi from './itemTournoi/ItemTournoi';
import {Container,Row,Col} from 'react-bootstrap';
import ChatBot from '../../chatBot/Chatbot';
import Tournoi from '../../tournoi/Tournoi';
import Match from '../../match/Match';
import { connect } from 'react-redux';

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
            
                <Container>
                    <Row>
                        <Col xs={4} md={5}>
                            <ItemMatch/>
                        </Col>
                        <Col xs={1} md={4}>
                            <ItemTournoi/>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col xs={1} md={4}>
                            <ItemChatBot/>
                        </Col>
                    </Row>
                </Container>
                {this.itemChosen()}
                
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
