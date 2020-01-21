import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileAvailable from '../fileAvailable/FileAvailable'
import Upload from '../upload/Upload';

var axios=require('axios') ;
class TournamentInfo extends Component {
    constructor(props){
        super(props);
        this.state={
           renderFile :""
        }
        //let tournamentId = this.props.match.params.tournamentId;
        

    }

    
    getRenderFileManager(){

        //this.getUserId(sessionStorage.getItem("sessionId"));
        
        var self = this;

        //console.log()
        let array_render=[];
        //Per default all user can download file
        array_render.push(
                <FileAvailable
                   key="fileAvailable"
                   folderId = {this.props.match.params.tournamentId}
                />
                );
        
       
        axios.get('http://localhost:8082/user/' + sessionStorage.getItem("userId"))
            .then(function (response) {
                if (response.data !== undefined && response.data !== ""){
                    
                 
                    if(response.data.isAdmin){
                        array_render.push(
                            <Upload
                            key="uploadFile"
                            folderId={self.props.match.params.tournamentId}
                            />
                        )
                        
                    }
                    self.setState({renderFile:array_render}) ;
                
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
    
    

    render(){
        const display_list= this.getRenderFileManager();
        return(
            <div className="panel-body">
                {this.state.renderFile}
            </div>
        )
    }

    
}



export default connect()(TournamentInfo);