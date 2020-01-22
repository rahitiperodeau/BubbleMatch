import React, {Component} from 'react';
import ItemChatBot from './itemChatbot/ItemChatBot';
import ItemMatch from './itemMatch/ItemMatch';
import ItemTournoi from './itemTournoi/ItemTournoi';
import {Row,Col} from 'react-bootstrap';
import ChatBot from '../../chatBot/ChatBot';
import Tournoi from '../../tournoi/Tournoi';
import Match from '../../match/Match';
import { connect } from 'react-redux';
import './MiddleSide.css'

class MiddleSide extends Component{
    constructor(props){
        super(props);
        this.state={
            mainComponent : <div/>

        }

    }


    updateComponent(cmp){
        
        this.setState({mainComponent : cmp})
    }


    render(){        
            console.log(this.props.tournamentList.list[0])
        
            return(
                <div className="middleSide">

                    
                
                    <div id="bulles">
                        <Row xs={1} md={6}>
                            <Col xs={1} md={6}>
                                <div className = "matchDiv" onClick={()=>{this.updateComponent(<Match/>)}}>
                                <ItemMatch onclick={this.updateComponent}/>
                                </div>
                            </Col>
                            </Row>
                            <Row>
                            <Col xs={2} md={2}>
                                <div className = "tournoiDiv" onClick={()=>{this.updateComponent(<Tournoi/>)}}>
                                <ItemTournoi onclick={this.updateComponent}/>
                                </div>
                            </Col>
                            </Row>
                            <Row>
                            <Col xs={1} md={6}>
                                <div className = "chatBotDiv" onClick={()=>{this.updateComponent(<ChatBot/>)}}>
                                <ItemChatBot/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div id="bulle">
                    {this.state.mainComponent}

                    </div>
                    
                </div>
            )
        
    }
}
const mapStateToProps =(state,ownProps)=>{
    return{
        chatbotState: state.chatBotDisplayReducer,
        tournoiState:state.tournoiDisplayReducer,
        matchState:state.matchDisplayReducer,
        tournamentList:state.setTournamentsListReducer,
    }
}
export default connect(mapStateToProps)(MiddleSide);
