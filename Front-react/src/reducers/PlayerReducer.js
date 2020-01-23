const initialState = {
    arr:[]
}
export default function playerReducer(state= {},action){

    switch(action.type){
        case 'SET_PLAYER_STATE':
            return action.obj;

        case 'ADD_CHAMPION_INFO':
           // return [...state, action.obj.slice(0,2)];
            return {...state, "champions": action.obj.slice(0,3)  }

        case 'ADD_PLAYER_INFO':
            return {...state, "players": action.obj  }
    default:
        return state;
    }
}