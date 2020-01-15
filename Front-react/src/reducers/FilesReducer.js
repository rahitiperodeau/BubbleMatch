
const filesAvailableReducer= (state={files:{}},action) => {
    switch (action.type) {
        case 'UPDATE_FILES_AVAILABLE' :
                let tmp_files_list=JSON.parse(JSON.stringify(action.obj));
            return {files:tmp_files_list};

    default:
      return state;
    }
}

export default filesAvailableReducer;