const setTournamentIdsListReducer=(state={list:[]},action)=>{
    switch(action.type){
        case 'SET_TOURNAMENT_IDS_LIST':
            return {list:action.obj};
        case 'SET_TOURNAMENT_NAME':
            let listTemp=state.list;
            for(let i=0;i<state.list.length;i++){
                if (Number(action.obj.id)===Number(state.list[i].tournamentId)){
                    listTemp.tournamentName=action.obj.name;
                }
            }
            return {list:listTemp};
    default:
        return state;
    }
    
}
export default setTournamentIdsListReducer;


