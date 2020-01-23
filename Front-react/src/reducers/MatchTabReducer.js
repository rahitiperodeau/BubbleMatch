const matchTabReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_MATCH_TAB':
            return action.obj;
    default:
        return state;
    }
}
export default matchTabReducer;