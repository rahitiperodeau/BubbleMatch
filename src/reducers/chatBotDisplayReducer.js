const chatBotDisplayReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_CHATBOT_STATE':
            return action.obj;
    default:
        return state;
    }
}
export default chatBotDisplayReducer;