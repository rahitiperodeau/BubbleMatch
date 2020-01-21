
const teamReducer= (state={team:{}},action) => {
    switch (action.type) {
        case 'ADD_TEAM' :
                let tmp_team=JSON.parse(JSON.stringify(action.obj));
            return {team:tmp_team};

    default:
      return state;
    }
}

export default teamReducer;