const filesAvailableReducer= (state={filesAvailable:{}},action) => {
    switch (action.type) {
        case 'UPDATE_FILES_AVAILABLE' :
                let tmp_files_available=JSON.parse(JSON.stringify(action.obj));
            return tmp_files_available;
        

    default:
      return state;
    }
}

export default filesAvailableReducer;