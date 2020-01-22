import React, { Component } from 'react';
import { post } from 'axios';
import axios from 'axios';
import {filesAvailable} from '../../actions';
import { connect } from 'react-redux';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
      }
      onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
          this.updateFileList();
        })
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      fileUpload(file){
        const url = 'http://localhost:8090/doUpload';
        const formData = new FormData();
        formData.append('file',file);
        formData.append('folderId',this.props.folderId);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
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


      downloadfile = (fileId) => {
        fetch('http://localhost:8080/downloadFile/'+fileId)
          .then(response => {
            const filename =  response.headers.get('Content-Disposition').split('filename=')[1];
            response.blob().then(blob => {
              let url = window.URL.createObjectURL(blob);
              let a = document.createElement('a');
              a.href = url;
              a.download = filename;
              a.click();
          });
       });
      }
    
      render() {
        return (
          <div>
          <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" onChange={this.onChange} />
            <button type="submit">Upload</button>
          </form>
          
          </div>
       )
      }
}
export default connect()(Upload);


