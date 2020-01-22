const equipesTabIndexReducer = (state={},action)=>{
    switch(action.type){
        case 'SELECT_EQ_TAB_INDEX':
            return action.obj;
    default:
        return state;
    }
}
export default equipesTabIndexReducer;