const allTeamsReducer = (state={},action)=>{
    switch(action.type){
        case 'SET_TEAMS':
            return action.obj;
    default:
        return state;
    }
}
export default allTeamsReducer;