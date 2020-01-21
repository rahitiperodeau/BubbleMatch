import React, {Component} from 'react';
import {Navbar,Dropdown} from 'react-bootstrap';
import './css/TopBar.css';
import Axios from 'axios';
import {addTournamentNameAction} from '../../../actions';
import {connect} from 'react-redux';

var axios = require('axios');

class TopBar extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    /**
     * recupere les les noms des tournois à partir de leur ids
     * en vue de les afficher dans le composant DropDown "Tournaments" 
     */

    getTournamentNames(){
        
        let self=this;
        //à partir de la liste des ids de tournament on recupere les obj tournaments
        for(let i=0;i<this.props.tournamentList;i++){
            axios.get(`http://localhost:8083/tournament/${self.props.tournamentList[i]}`)
            .then(function(response){
                console.log("getTournName");
                console.log(response.data);
                self.props.dispatch(addTournamentNameAction(response.data));
            })
            .catch(function(err){
                console.log(err)
            })
            .finally(function(a){
                console.log(a)
            })
        }

    }

    /**
     *  pour afficher les tournois auxquels l'utilisateur
     *  est inscrit
     */
    renderTournaments(){
        let rendering;
        this.props.tournamentList.forEach((tourn)=>{
            if(tourn.tournamentName!==undefined){
                //rendering+=<Dropdown.Item > {tourn.tournamentName} </Dropdown.Item>
            }
            else{
                rendering=<div>Fail</div>
            }
        })
        console.log(rendering);
        return rendering;
    }

    render(){
        console.log("TOPBAR");
        console.log(this.props.tournamentList);
        return(
            
                <Navbar className="navBar">
                    <div>
                    <Navbar.Brand className="brand" href="/home">
                            BubbleMatch
                        </Navbar.Brand>
                        <Navbar.Brand className="brand">
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                Tournaments
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item > La Grosse Ligue </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        
                        </Navbar.Brand>

                        <Navbar.Brand className="brand" href="/generationTournoi">
                            Creer tournoi
                        </Navbar.Brand>
    
                        
                        <Navbar.Brand className="brand" href="/autresTournois">
                            Plus
                        </Navbar.Brand>
                        <Navbar.Brand className="myUser" >
                            {sessionStorage.getItem("userId")}
                        </Navbar.Brand>
                        
                        <Navbar.Brand className="uploadFile" href="/upload">
                            upload file
                        </Navbar.Brand>
                        <Navbar.Brand className="signOut" href="/signOut" id="barDec">
                            Disconnect
                        </Navbar.Brand>
                        <Navbar.Brand className="myAccount" href="/myAccount" id="bar">
                            My account
                        </Navbar.Brand>
                    
                    </div>
                    
                </Navbar>

                
            
        )
    }

}
const mapStateToProps=(state,ownProps)=>{
    return{
        tournamentList:state.setTournamentIdsListReducer,
    }
}
export default connect(mapStateToProps)(TopBar);