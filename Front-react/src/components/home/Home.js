import React, {Component} from 'react';
import MiddleSide from './middleSide/MiddleSide';
import './css/Home.css'
import { connect } from 'react-redux';

import {tournamentIdsAction} from '../../actions';
var axios = require('axios');


const fakeUId=61;

class Home extends Component{
    constructor(props){
        super(props);
        this.getPlayerId=this.getPlayerId.bind(this);

        this.getPlayerId(fakeUId);
    }

    getPlayerId(userId){
        let self=this;
        let tournamentIdLists=[];
        axios.get(`http://localhost:8082/players/${userId}`)
        .then(function(response){
            console.log("------")
            console.log(response.data)
            //techniquement response.data est une liste de Player
            for(let i=0;i<response.data.length;i++){
                axios.get(`http://localhost:8083/tournamentId/${response.data[i].playerId}`)
                .then(function(resp){
                    tournamentIdLists.push(
                        {
                            "tournamentId":resp.data,
                            "tournamentName":null,
                        }
                    );
                    console.log("tournamentListIds")
                    console.log(tournamentIdLists)
                })
                .catch(function(error){
                    console.log(error)
                })
                .finally(function(a){
                    console.log(a)
                })
            }

        })
        .catch(function(error){
            console.log(error);
        })
        .finally(function(a){
            console.log(a)
        })
        
        this.props.dispatch(tournamentIdsAction(tournamentIdLists));
        
    }
     

    render(){
        //this.getUserId(sessionStorage.getItem("sessionId"));
        return(
            <div className="home">
                <MiddleSide/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.userReducer,
      tournamentIdsList:state.setTournamentIdsListReducer
    }
  };
  
//export the current classes in order to be used outside
export default connect(mapStateToProps)(Home);

