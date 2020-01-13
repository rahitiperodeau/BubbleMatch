const matchDisplayReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_MATCH_STATE':
            return action.obj;
    default:
        return state;
    }
    
}
export default matchDisplayReducer;