

export const userConnection=(user_obj)=>{
    return {
        type: 'USER_CONNECTED',
        obj:user_obj
        
    };
}

export const chatBotDisplay=(chatbot_state)=>{
    return{
        type:'SET_CHATBOT_STATE',
        obj:chatbot_state
    }
}

