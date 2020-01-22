var template_player = [
    {
        "name":"Salut",
        "id":"1232e1zefzef1815r56_BOOM",
        "champion_mastered_1_id":10,
        "champion_mastered_2_id":11,
        "champion_mastered_3_id":12
    }
]

const listChampionsReducer=(state={listPlayer:[]},action)=>{
    switch(action.type){
        case 'SET_PLAYER_STATE':
            return {template_player};

       /* case 'ADD_CHAMPION_INFO':
            //action.obj = liste d'objets
            let listPlayer2;
           
            listPlayer2=state.listPlayer;
            listPlayer2.champion_mastered_1_id=action.obj[0].championId;
            listPlayer2.champion_mastered_2_id=action.obj[1].championId;
            listPlayer2.champion_mastered_3_id=action.obj[2].championId;
        
            return {listPlayer:listPlayer2}
*/

        case 'ADD_PLAYER_INFO':


    default:
        return state;
    }
}

export default listChampionsReducer;


