

export const userConnection=(user_obj)=>{
    return {
        type: 'USER_CONNECTED',
        obj:user_obj
        
    };
}

export const chatBotDisplay=(chatbot_state)=>{
    return{
        type:'SET_CHATBOT_STATE',
        obj:chatbot_state
    }
}

export const tournoiDisplay=(tournoi_state)=>{
    return{
        type:'SET_TOURNOI_STATE',
        obj:tournoi_state
    }
}

export const matchDisplay=(match_state)=>{
    return{
        type:'SET_MATCH_STATE',
        obj:match_state
    }
}

export const setInfoGenTournoiAction=(info_obj)=>{
    return{
        type:'SET_TOURNAMENT_GEN_INFO',
        obj:info_obj
    }
}

export const addTeamGenTournoiAction=(team_obj)=>{
    return{
        type:'ADD_TEAM_GEN_INFO',
        obj:team_obj
    }
}

export const DisplayTournaments=(tournaments) =>{
    return{
        type:'GET_TOURNAMENTS',
        obj: tournaments
    }
}

export const AddTeam=(team) =>{
    return{
        type:'ADD_TEAM',
        obj: team
    }
}

export const setBracketAction=(bracket_obj)=>{
    return{
        type:'SET_BRACKET',
        obj:bracket_obj
    }
}

export const setTournamentIdAction=(id) =>{
    return{
        type:'SET_TOURNAMENT_ID',
        obj: id
    }
}
    
export const filesAvailable=(files_obj) =>{
    return{
        type:'UPDATE_FILES_AVAILABLE',
        obj:files_obj
    }
}


export const team1InfosAction=(team_obj)=>{
    return{
        type:'TEAM1_INFOS',
        obj:team_obj
    }
}

export const team2InfosAction=(team_obj)=>{
    return{
        type:'TEAM2_INFOS',
        obj:team_obj
    }
}

export const matchBracketClicked=(match_obj)=>{
    return{
        type:'MATCH_BRACKET_CLICKED',
        obj:match_obj
    }
}

export const allTeamsAction=(teams_obj)=>{
    return{
        type:'SET_TEAMS',
        obj:teams_obj
    }
}

export const equipesTabIndexAction=(tab_index)=> {
    return{
        type:'SELECT_EQ_TAB_INDEX',
        obj:tab_index
    }
}

export const tournamentListAction=(tournaments_list)=>{
    return{
        type:'ADD_EL_TOURNAMENT_LIST',
        obj:tournaments_list
    }
}


