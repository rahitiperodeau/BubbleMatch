import React, { Component } from 'react';
import { Group } from '@vx/group';
import {connect} from 'react-redux';


import {team1InfosAction,team2InfosAction,matchBracketClicked} from '../../../../actions';

var axios = require('axios');

const peach = '#fd9b93';
const pink = '#fe6e9e';
const blue = '#03c0dc';
const green = '#26deb0';
const plum = '#71248e';
const lightpurple = '#374469';
const white = '#ffffff';
const bg = '#172b4d';

const width = 200;
const height = 100;
const centerX = -width / 2;
const centerY = -height / 2;


class Node extends Component{
  constructor(props){
    super(props);
    this.bracketInfos=this.bracketInfos.bind(this);
    this.getTeamName=this.getTeamName.bind(this);

  }

  bracketInfos(node){

    console.log("bracketInfos node")
    console.log(node)
    let self=this;
    axios.get(`http://localhost:8083/team/${node.teamId1}`)
    .then(function (response){
      self.props.dispatch(team1InfosAction(response.data))
    })
    .catch(function(error){
      console.log(error);
    })
    .finally(function(){
      //always executed
    })

    axios.get(`http://localhost:8083/team/${node.teamId2}`)
    .then(function (response){
      self.props.dispatch(team2InfosAction(response.data))
    })
    .catch(function(error){
      console.log(error);
    })
    .finally(function(){
      //always executed
    })

    this.props.dispatch(matchBracketClicked(node));

    
  }

  getTeamName(p_team_id){
    let self=this;
    console.log(p_team_id)
    let allTeamsFiltered=self.props.allTeams.filter((el)=>el.teamId==p_team_id);
    console.log(allTeamsFiltered[0].teamName);
    return allTeamsFiltered[0].teamName;

  }

  

  render(){
    let self=this;
    if(this.props.allTeams===undefined || this.props.allTeams==={} ||
      (Object.keys(this.props.allTeams).length===0 && this.props.allTeams===Object)|| this.props.node.teamId1===undefined 
      || this.props.node.teamId2===undefined){
      return(
        <Group top={self.props.node.x} left={self.props.node.y}>
              <rect
              height={height}
              width={width}
              y={centerY}
              x={centerX}
              fill={bg}
              stroke={peach}
              strokeWidth={1}
              
              rx={10}

              />
              
          </Group>

      )
    }
    else{
      return(

        <Group top={self.props.node.x} left={self.props.node.y}>
              <rect
              height={height}
              width={width}
              y={centerY}
              x={centerX}
              fill={bg}
              stroke={peach}
              strokeWidth={1}
              
              rx={10}
              onClick={() => {
                  self.bracketInfos(self.props.node);
                  
              }}
              />
              <text
              dy={'.33em'}
              fontSize={14}
              fontFamily="Arial"
              textAnchor={'middle'}
              fill={green}
              style={{ pointerEvents: 'none' }}
              >
              {this.getTeamName(this.props.node.teamId1)} VS {this.getTeamName(this.props.node.teamId2)}
                  
              </text>
          </Group>
  
  
      )
    }
  }

}
const mapStateToProps = (state,ownProps)=>{
  return{
    allTeams:state.allTeamsReducer,
  }
}

export default connect(mapStateToProps)(Node);
