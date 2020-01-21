const setIdTournamentReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_TOURNAMENT_ID':
            return action.obj;
    default:
        return state;
    }
    
}
export default setIdTournamentReducer;