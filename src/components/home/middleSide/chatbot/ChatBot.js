import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import chatbotImage from '../../../../img/chatbot.png';

class ChatBot extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Image src={chatbotImage} roundedCircle/>
            </div>
        )
    }
}
export default ChatBot;