import React, { Component } from 'react';
import axios from 'axios';
import {filesAvailable} from '../../actions';
import { connect } from 'react-redux';


class DeleteFile extends Component {
    constructor(props) {
        super(props);
        this.state ={
            files:[
            
                {  fileName: '', uploaded_Date: '' ,action : ''}
                
              ]
        }
        this.deletefile = this.deletefile.bind(this);
        this.updateFileList = this.updateFileList.bind(this);

      }

      deletefile(fileId){
        var self = this;
        let folderId = this.props.folderId;
        
        axios.delete('http://localhost:8090/deleteFile/'+ fileId + '/' + folderId)
            .then(function (response) {
                
                self.updateFileList();
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  
      }

      updateFileList(){

        
        var self = this;
        let tournamentId = this.props.folderId;
        
        axios.get('http://localhost:8090/files/'+ tournamentId)
            .then(function (response) {
                if (response.data !== undefined && response.data !== ""){
                    
                   
                    //selfState.name = responseHttp.name;
                    //selfState.surname = responseHttp.surname;
                    //selfState.email = responseHttp.email;
                    console.log(response.data);
                    self.props.dispatch(filesAvailable(response.data))
                    
                
                }else{

                    self.props.dispatch(filesAvailable(self.state.files))
                }
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  

        

    }

    
      render() {
        if(this.props.fileId == null){
          return(
            ""
          )
        }else{
        return (
            <div>

                <div className="ButtonDelete">
                <button onClick={()=>this.deletefile(this.props.fileId)}>Delete</button>
                </div>
          </div>
       )}
      }
}
export default connect()(DeleteFile);