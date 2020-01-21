import React, { Component } from 'react';
import {connect} from 'react-redux';
import Poules from '../commonModel/poule/Poules';
import {genTree,fillBracket} from '../commonModel/bracket/components/BracketFunctions';
import { Group } from '@vx/group';
import { Tree } from '@vx/hierarchy';
import { LinkHorizontalStep } from '@vx/shape';
import { hierarchy } from 'd3-hierarchy';

import Node from '../commonModel/bracket/components/Node';
import {setBracketAction,allTeamsAction} from '../../actions';
import BracketInfo from '../commonModel/bracket/components/BracketInfo';

var axios = require('axios');

const lightpurple = '#374469';
const bg = '#172b4d';
const white = '#ffffff';
const pink = '#ffc0cb';

const margin = {
    top: 10,
    left: 100,
    right: 40,
    bottom: 80
  };
const height=800;
const width= 1000;



const yMax = height - margin.top - margin.bottom;
const xMax = width - margin.left - margin.right;
//const yMax = height -500;
//const xMax = width - 300;

class Tournoi extends Component{
    constructor(props){
        super(props);
        this.state={
            bracketFilled:null,
            
        }
        this.getBracket=this.getBracket.bind(this);
        this.treeCreation=this.treeCreation.bind(this);
        this.setBracket=this.setBracket.bind(this);
        this.getAllTeams=this.getAllTeams.bind(this);
        
        this.getAllTeams();
        this.getBracket(1);
    }

    treeCreation(brckt){
        let tree=genTree(brckt);
        return tree;
    }

    setBracket(){
        let self =this;
        console.log("self.props.bracketR");
        console.log(self.props.bracketR);
    }

    


    getBracket(bracketId){
        let self = this
        let bracketTmp;
        axios.get(`http://localhost:8083/bracket/${bracketId}`)
        .then(function (response){
            if(response.data !==undefined){
                bracketTmp=response.data.bracket;
                //reponse.data ={structureId: 1, bracket: Array(2)}
                
                let treeTmp=self.treeCreation(bracketTmp);
                let data = hierarchy(treeTmp);
                let bracketFilled = fillBracket(data,bracketTmp);
               
                self.props.dispatch(setBracketAction(bracketFilled));
            }
            else{
                console.log("pas de bracket avec l'id donné");
            }
        })
        .catch(function (error){
            console.log(error);
        })
        .finally(function(){
            //always executed
        });
        
        
          
    }

    getAllTeams(){
        let self=this;
        axios.get(`http://localhost:8083/teams`)
        .then(function (response){
          console.log("getallsteams")
          console.log(response.data)
          self.props.dispatch(allTeamsAction(response.data))
        })
        .catch(function(error){
          console.log(error);
        }).finally(function(){
    
        })
      }


    render(){
        let self=this;
        if(self.props.bracketR.bracket.data===undefined || self.props.bracketR.bracket.data=={} || self.props.bracketR.bracket.data==null ||
            (self.props.allTeams===undefined) || (self.props.allTeams==={}) ||
      (Object.keys(self.props.allTeams).length===0)){
            return(<div>
                
            </div>);
        }
        else{
            console.log("check allteams in the render")
            console.log(this.props.allTeams)
            return(
                
                    
                    <div className="parent">
                        
                        <center>
                        <svg className="Class" width={width} height={height}>
                        <rect width={width} height={height} rx={14} fill={bg} /> 
                        <Tree root={self.props.bracketR.bracket} size={[yMax, xMax]}>
                            {()=>{
                                return(
                                    <Group>
                                        {self.props.bracketR.bracket.links().map((link,i)=>{
                                            return (
                                                <LinkHorizontalStep
                                                    key={`link-${i}`}
                                                    data={link}
                                                    percent={0.5}
                                                    stroke={pink}
                                                    strokeWidth="1"
                                                    fill="none"
                                                />
                                                );
                                        })}
                                        {self.props.bracketR.bracket.descendants().map((node, i) => {
                                           
                                            return <Node key={`node-${i}`} node={node}  />;
                                        })}
                                    </Group>
                                );
                            }}
                        </Tree>
                        </svg>
                        </center>
                        {/* {self.displayTeams()} */}
                        <BracketInfo/>
                    </div>

            )
            

        }
        
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        bracketR: state.setBracketReducer,
        team1R: state.team1InfosReducer,
        team2R:state.team2InfosReducer,
        allTeams:state.allTeamsReducer,
        tournamentIdsList:state.setTournamentIdsListReducer,
    }
}
export default connect(mapStateToProps)(Tournoi);