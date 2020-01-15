import React, { Component } from 'react';
import axios, { post } from 'axios';
import Download from '../download/Download';
import FileAvailable from '../fileAvailable/FileAvailable';

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
        })
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      fileUpload(file){
        const url = 'http://localhost:8090/doUpload';
        const formData = new FormData();
        formData.append('file',file);
        formData.append('folderId',46);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
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
          <div className="download">
          
          <FileAvailable/>
          </div>
          </div>
       )
      }
}
export default Upload;


