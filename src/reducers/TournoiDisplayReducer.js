const tournoiDisplayReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_TOURNOI_STATE':
            return action.obj;
    default:
        return state;
    }
}
export default tournoiDisplayReducer;