import React, {Component} from 'react';
import {Navbar,Dropdown} from 'react-bootstrap';
import './css/TopBar.css';
import Axios from 'axios';
import {genTree,fillBracket} from '../../commonModel/bracket/components/BracketFunctions';
import {tournamentListAction,setBracketAction} from '../../../actions';
import { hierarchy } from 'd3-hierarchy';
import {connect} from 'react-redux';

const UID=sessionStorage.getItem("userId");
var axios = require('axios');

class TopBar extends Component{

    constructor(props){
        super(props);
        this.state={

        }

        this.getPlayerId=this.getPlayerId.bind(this);
        this.setBracket=this.setBracket.bind(this);
        this.treeCreation=this.treeCreation.bind(this);
        if(UID !== null){
            this.getPlayerId(UID);
        }
        

    }

   

    getPlayerId(userId){
        let self=this;
        axios.get(`http://localhost:8082/players/${userId}`)
        .then(function(response){
            //techniquement response.data est une liste de Player
            for(let i=0;i<response.data.length;i++){
                axios.get(`http://localhost:8083/tournamentId/${response.data[i].playerId}`)
                .then(function(resp){
                    console.log(resp.data)
                    axios.get(`http://localhost:8083/tournament/${resp.data}`)
                    .then(function(reponse){
                        console.log("top bar :" +reponse.data)
                        let obj={"tournamentId":resp.data,"tournament":reponse.data};
                            
                        
                        self.props.dispatch(tournamentListAction(obj));
                    })
                    .catch(function(error){
                        console.log(error)
                    })
                })
                .catch(function(error){
                    console.log(error)
                })
            }
        
        })
        .catch(function(error){
            console.log(error);
        })
    }
    
    treeCreation(brckt){
        let tree=genTree(brckt);
        return tree;
    }

    setBracket(tournament){
        if (tournament.s!==null){
        let brckt=tournament.s.bracket;
        let treeTmp=this.treeCreation(brckt);
        let data=hierarchy(treeTmp);
        let bracketFilled=fillBracket(data,brckt);
        this.props.dispatch(setBracketAction(bracketFilled));
        }else{
            console.log("tournament is not yet available to look this feature")
        }

    }



    render(){
        let self=this;
        if(this.props.tournamentList===undefined){
            return(<div></div>)
        }
        else{
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
                            {this.props.tournamentList.list.map((obj,i)=>{
                                return <div key={i} id={i}><Dropdown.Item  onClick={()=>{self.setBracket(obj.tournament)}}>{obj.tournament.name}</Dropdown.Item> </div>
                            })}
                        </Dropdown.Menu>
                        </Dropdown>
                        
                        </Navbar.Brand>

                        <Navbar.Brand className="brand" href="/generationTournoi">
                            Create a Tournament
                        </Navbar.Brand>
    
                        <Navbar.Brand className="brand" href="/autresTournois">
                            Plus
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

}
const mapStateToProps=(state,ownProps)=>{
    return{
        tournamentList:state.setTournamentsListReducer,
    }
}
export default connect(mapStateToProps)(TopBar);