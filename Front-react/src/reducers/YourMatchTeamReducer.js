export default function yourMatchTeamReducer(state= {},action){

    switch(action.type){

    case 'ADD_PLAYER_INFO':
        return {...state, "players": action.obj  }
    default:
        return state;
    }
}