import React, { Component } from 'react';

import ChatBot from 'react-simple-chatbot';
//import './Chatbot.css';

//faudra config steps pour avoir une bonne conversation
const steps = [
    {
      id: '1',
      message: 'Bonjour! Je suis BubbleBot. Comment vous appelez-vous ?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Bonjour {previousValue}, Ravi de vous rencontrer!',
      end: true,
    },
  ];

class Chatbot extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div> 
                <ChatBot
                 headerTitle="BubbleBot"
                 steps={steps}
                 id="chatbot"
                />
            </div>
        )
    }
}
export default Chatbot;