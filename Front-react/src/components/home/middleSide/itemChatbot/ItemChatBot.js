import React, {Component} from 'react';
import {Figure} from 'react-bootstrap';
import chatbotImage from '../../../../img/chatbot.png';
import './css/ItemChatBot.css';
import { connect } from 'react-redux';
import {chatBotDisplay} from '../../../../actions';

class ItemChatBot extends Component{

    constructor(props){
        super(props);
        
        this.state ={
            chatBotState:true
        }
        this.setChatBotState = this.setChatBotState.bind(this);
    }

    setChatBotState(){
        
        this.props.dispatch(chatBotDisplay(this.state.chatBotState));
        this.setState({chatBotState:!this.state.chatBotState})
    }

    render(){
        return(
            <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        src={chatbotImage}
                        onClick={()=>{this.setChatBotState()}}

                        id="image"
                    />
                   
            </Figure>

            
        )

        /*
        
        */
    }
}
export default connect()(ItemChatBot);