import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import TopBar from '../home/topSide/TopBar';
import { connect } from 'react-redux';
import './css/Inscription.css';


var axios=require('axios') ;

class InscriptionTournoi extends Component{
    constructor(props){
        super(props);
        this.state={  
            
        }
        this.sendSubscribeTeam= this.sendSubscribeTeam.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
      }
    sendSubscribeTeam() {
        let self = this;
        let team = {};
        let playerName1 = document.getElementById("playerName1").value;
        let playerName2 = document.getElementById("playerName2").value;
        let playerName3 = document.getElementById("playerName3").value;
        let playerName4 = document.getElementById("playerName4").value;
        let playerName5 = document.getElementById("playerName5").value;
        let player1= {playerName1};
        let player2= {playerName2};
        let player3= {playerName3};
        let player4= {playerName4};
        let player5= {playerName5};

       
        team.teamName= document.getElementById("teamName").value;

        console.log(team);

        team.players = [player1, player2, player3, player4, player5];
        console.log(team);

        axios.put("http://localhost:8083/tournament/1/addTeam", team)
                        .then(function (response) {
                                
                            })
                            .catch(function(error){
                                console.log(error);
                            })
                        }
    
    render(){
        return(
            <div id="conteneur">
                
                <Form>
                
                    <Form.Group controlId="teamName" className="forms">
                    <Form.Label className="labels"> Team name </Form.Label>
                    <Form.Control type="text" id="teamName"/>
                </Form.Group>
                <Form.Group controlId="playerName1">
                    <Form.Label className="labels"> Pseudo 1 </Form.Label>
                    <Form.Control type="text" id="playerName1" />
                </Form.Group>

                <Form.Group controlId="playerName2">
                    <Form.Label className="labels"> Pseudo 2 </Form.Label>
                    <Form.Control type="text" id="playerName2" />
                </Form.Group>
                <Form.Group controlId="playerName3">
                    <Form.Label className="labels"> Pseudo 3 </Form.Label>
                    <Form.Control type="text" id="playerName3" />
                </Form.Group>
                <Form.Group controlId="playerName4">
                    <Form.Label className="labels"> Pseudo 4 </Form.Label>
                    <Form.Control type="text" id="playerName4" />
                </Form.Group>
                <Form.Group controlId="playerName5">
                    <Form.Label className="labels"> Pseudo 5 </Form.Label>
                    <Form.Control type="text" id="playerName5" />
                </Form.Group>
                <Button variant="primary" onClick={()=>{this.sendSubscribeTeam()}} type="submit">
                    Envoyer
                </Button>
                </Form>
            </div>
            
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      team: state.teamReducer.team
    }
  };
  export default connect(mapStateToProps)(InscriptionTournoi);