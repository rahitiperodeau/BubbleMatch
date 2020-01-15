import React, { Component } from 'react';
import axios, { post } from 'axios';


class Download extends Component {
    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.downloadfile = this.downloadfile.bind(this);

      }

      downloadfile(fileId){
        fetch('http://localhost:8090/downloadFile/'+fileId)
        .then(response => {
            console.log(response.headers);
            const filename = "";
            try{
              filename =  response.header.get('Content-Disposition').split('filename=')[1];
            }catch(e){
                console.log(e);
            }
          response.blob().then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            console.log(a);
            a.download = filename;
            a.click();
        });
     });
      }

    
      render() {
        return (
            <div>

                <div className="App-intro">
                <h3>Download the file 1 test</h3>
                <button onClick={()=>this.downloadfile(9)}>Download</button>
                </div>
          </div>
       )
      }
}
export default Download;