import React, {Component} from 'react';
import {Image,Figure,Button} from 'react-bootstrap';
import chatbotImage from '../../../../img/chatbot.png';
import {Widget,addResponseMessage} from 'react-chat-widget';
import './css/ItemChatBot.css';
import { connect } from 'react-redux';
import {chatBotDisplay} from '../../../../actions';

class ItemChatBot extends Component{

    constructor(props){
        super(props);
        let chatBotState;
        this.state ={
            chatBotState:true
        }
        this.setChatBotState = this.setChatBotState.bind(this);
    }

    setChatBotState(){
        
        this.props.dispatch(chatBotDisplay(this.state.chatBotState));
        this.state.chatBotState=!this.state.chatBotState;
    }

    render(){
        return(
            <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        src={chatbotImage}
                    />
                    <Figure.Caption className="caption">
                    <Button onClick={()=>{this.setChatBotState()}}>Chatbot</Button>
                    </Figure.Caption>
            </Figure>

            
        )

        /*
        
        */
    }
}
export default connect()(ItemChatBot);