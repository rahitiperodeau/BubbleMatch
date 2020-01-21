const displayTournamentsReducer=(state={allTournaments:[]},action)=>{
    switch(action.type){
        case 'GET_TOURNAMENTS':
            return {allTournaments:action.obj};
    default:
        return state;
    }
}
export default displayTournamentsReducer ;