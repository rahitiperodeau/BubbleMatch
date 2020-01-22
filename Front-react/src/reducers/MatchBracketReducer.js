const matchBracketReducer = (state={},action)=>{
    switch(action.type){
        case 'MATCH_BRACKET_CLICKED':
            return action.obj;
    default:
        return state;
    }
}
export default matchBracketReducer;