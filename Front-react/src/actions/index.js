

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

export const filesAvailable=(files_obj) =>{
    return{
        type:'UPDATE_FILES_AVAILABLE',
        obj:files_obj
    }
}

export const playerDisplay=(player_obj)=>{
    return {
        type: 'SET_PLAYER_STATE',
        obj:player_obj
        
    };
}

export const championDisplay=(player_obj)=>{
    return {
        type: 'ADD_CHAMPION_INFO',
        obj:player_obj
        
    };
}

export const teamsDisplay=(player_obj)=>{
    return {
        type: 'ADD_PLAYER_INFO',
        obj:player_obj
        
    };
}

export const matchTabAction=(class_index)=>{
    return{
        type:'SET_MATCH_TAB',
        obj:class_index
    }
}

export const championsDisplay=(champions_obj)=>{
    return {
        type: 'SET_CHAMPIONS_STATE',
        obj:champions_obj
        
    };
}