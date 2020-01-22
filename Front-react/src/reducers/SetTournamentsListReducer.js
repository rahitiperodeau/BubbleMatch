const setTournamentsListReducer=(state={list:[]},action)=>{
    switch(action.type){
        case 'SET_TOURNAMENT_LIST':
            return {list:action.obj};
        case 'ADD_EL_TOURNAMENT_LIST':
            let listTemp=state.list;
            listTemp.push(action.obj);
            return {list:listTemp};
    default:
        return state;
    }
    
}
export default setTournamentsListReducer;


