import React, { Component } from 'react';


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
            let filename = "";
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
        if(this.props.fileId == null){
          return(
            ""
          )
        }else{
        return (
            <div>

                <div className="ButtonDownload">
                <button onClick={()=>this.downloadfile(this.props.fileId)}>Download</button>
                </div>
          </div>
       )}
      }
}
export default Download;