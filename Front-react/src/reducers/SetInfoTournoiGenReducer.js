const setInfoTournoiGenReducer=(state={tournamentInfos:{}},action)=>{
    switch(action.type){
        case 'SET_TOURNAMENT_GEN_INFO':
            return {tournamentInfos:action.obj};
        case 'ADD_TEAM_GEN_INFO':
            let objTemp=state.tournamentInfos;

            let pEquipes=[];
            for(let i=0;i<state.tournamentInfos.equipes.length;i++){
                pEquipes.push(state.tournamentInfos.equipes[i]);
            }
            pEquipes.push(action.obj);

            objTemp.equipes.push(action.obj);
            return{tournamentInfos:objTemp}
    default:
        return state;
    }
    
}
export default setInfoTournoiGenReducer;