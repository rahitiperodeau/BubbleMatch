const team1InfosReducer = (state={},action)=>{
    switch(action.type){
        case 'TEAM1_INFOS':
            console.log("action.obj team1")
            console.log(action.obj)
            return action.obj;
    default: 
        return state;
    }
}
export default team1InfosReducer;