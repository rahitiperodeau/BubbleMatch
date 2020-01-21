const team2InfosReducer = (state={},action)=>{
    switch(action.type){
        case 'TEAM2_INFOS':
            console.log("action.obj team2")
            console.log(action.obj)
            return action.obj;
    default: 
        return state;
    }
}
export default team2InfosReducer;