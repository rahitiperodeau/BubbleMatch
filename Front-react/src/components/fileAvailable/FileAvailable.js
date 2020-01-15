import React, { Component } from 'react';
import axios, { post } from 'axios';
import {filesAvailable} from '../../actions';
import { connect } from 'react-redux';
import FileInfo from './content/FileInfo'
import "./style/FileTab.css";

class FileAvailable extends Component {
    constructor(props) {
        super(props);
        this.state ={
          fileAvailableinit:[
            
            {  fileName: '', uploadedDate: '' }
            
          ]
        }
       
      }

      getFilesList(){

        
        var self = this;
        let tournamentId = 46;
        //console.log()
        var responseHttp;
        axios.get('http://localhost:8090/files/'+ tournamentId)
            .then(function (response) {
                if (response.data !== undefined && response.data != ""){
                    
                    responseHttp = response.data;
                    //selfState.name = responseHttp.name;
                    //selfState.surname = responseHttp.surname;
                    //selfState.email = responseHttp.email;
                    console.log(response.data);
                    self.props.dispatch(filesAvailable(response.data))
                    
                
                }else{
                    alert("error no response from server")
                }
                
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  

        

    }

    renderTableHeader() {
        let header = Object.keys(this.state.fileAvailableinit[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     
    
      render() {
        return (
         
            <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='filesAvailable'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.props.filesAvailable.map(item => (
                    <FileInfo key={item.id} item={item} />
                    ))}
               </tbody>
            </table>
            <button onClick={()=>this.getFilesList()}>UpdateFileList</button>
         </div>
        
       )
      }
}
const mapStateToProps = (state, ownProps) => {
    return {
      filesAvailable: state.filesAvailableReducer
    }
  };

  
  //export the current classes in order to be used outside
export default connect(mapStateToProps)(FileAvailable);