const setBracketReducer =(state={bracket:{}},action)=>{
    switch(action.type){
        case 'SET_BRACKET':
            return {bracket:action.obj};
    default:
        return state;
    }
}
export default setBracketReducer;