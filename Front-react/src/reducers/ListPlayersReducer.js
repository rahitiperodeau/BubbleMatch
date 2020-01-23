const listPlayersReducer=(state={user:{}},action)=>{
    switch(action.type){
        case 'TEAM_SELECTED':
            return action.obj;
    default:
        return state;
    }
}

export default listPlayersReducer;


