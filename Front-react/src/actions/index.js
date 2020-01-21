

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


export const setTournamentIdAction=(id) =>{
    return{
        type:'SET_TOURNAMENT_ID',
        obj: id
    }
    
export const filesAvailable=(files_obj) =>{
    return{
        type:'UPDATE_FILES_AVAILABLE',
        obj:files_obj
    }
}