import React, {Component} from 'react';
import ItemChatBot from './itemChatbot/ItemChatBot';
import ItemMatch from './itemMatch/ItemMatch';
import ItemTournoi from './itemTournoi/ItemTournoi';
import {Container,Row,Col} from 'react-bootstrap';
import ChatBot from '../../chatBot/Chatbot';
import { connect } from 'react-redux';

class MiddleSide extends Component{

    constructor(props){
        super(props);

    }
    render(){
        const ctState=this.props.chatbotState;
        let rendering = <div/>;
        if (ctState!==undefined){
            console.log(ctState)
            console.log("coucou");
            if (ctState==true){
                console.log("coucou");
                rendering=<ChatBot/>;
            }else{
                rendering=<div/>;
            }
        }
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
                {rendering}
                
            </div>
        )
    }
}
const mapStateToProps =(state,ownProps)=>{
    return{
        chatbotState: state.chatBotDisplayReducer
    }
}
export default connect(mapStateToProps)(MiddleSide);