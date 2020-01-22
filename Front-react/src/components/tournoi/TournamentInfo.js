import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileAvailable from '../fileAvailable/FileAvailable'
import Upload from '../upload/Upload';
import TournamentInfoText from './components/TournamentInfoText';
import './style/TournamentInfo.css'
import {userConnection} from '../../actions'

var axios=require('axios') ;
class TournamentInfo extends Component {
    constructor(props){
        super(props);
        this.state={
           renderFile :"",
           tournamentName:"",
           tournamentDescription:""
        }
        this.getTournamentInfo();
        this.getRenderFileManager();
        this.getUserInfo();
    }



     getUserInfo(){
        let self =this;
        axios.get('http://localhost:8082/user/' + sessionStorage.getItem("userId"))
                .then(function (response) {
                    if (response.data !== undefined && response.data !== ""){
                        
                    
                        self.props.dispatch(userConnection(response.data))
                        
                    
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

    getTournamentInfo(){

        var self = this;

       
        axios.get('http://localhost:8083/tournament/' +self.props.match.params.tournamentId)
            .then(function (response) {
                if (response.data !== undefined && response.data !== ""){
                    
                 self.setState({
                    tournamentName:response.data.name,
                    tournamentDescription:response.data.description
                 })
                   
                
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

    getRenderFileManager(){

        var self = this;

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
        //const display_list= this.getRenderFileManager();
        return(
            <div className="row">
                <div className="column">
                <TournamentInfoText
                    tournamentName = {this.state.tournamentName}
                    tournamentDescription = {this.state.tournamentDescription}
                    />               
                 </div>
                <div className="column">
                    {this.state.renderFile}
                </div>
                
            </div>
        )
    }

    
}



export default connect()(TournamentInfo);