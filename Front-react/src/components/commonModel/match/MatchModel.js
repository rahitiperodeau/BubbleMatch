import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Player from '../player/Player'
import PlayerFunction from '../player/Player'

import { connect } from 'react-redux';

import {player_1} from '../../../data/data_player';
import {champion_mastery_by_player} from '../../../data/data_champions';
import {rank_info} from '../../../data/data_rank';
import {champion_info} from '../../../data/data_champion';
import {perfect_player} from '../../../data/perfect_player';
import {team_blueside} from '../../../data/team_blueside';
import {team_redside} from '../../../data/team_redside';
import {playerDisplay,matchTabAction,championsDisplay} from '../../../actions'


import {getSummoner} from '../../../api/index'
import Axios from 'axios';



const useStyles = makeStyles(theme => ({
    root: {
      width: 'fit-content',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      '& svg': {
        margin: theme.spacing(2),
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },
    },

  }));


  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


// function MatchFunction(team1, team2){
//     let team_blueside= team1.param;
//     let team_redside = team2.param
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };

//     const summonerName = "Rospote";
    
// }



// function tryHook(){
//   const [value, setValue] = React.useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return ([[value,setValue],handleChange]);
// }


//model d'un match
class MatchModel extends Component{
    constructor(props){
        super(props);
        //let summoner = {};
        //summoner = getSummoner("Rospote");
        this.state={
          tabSelected:1,
          //summoner : getSummoner("Rospote")
        }


        //this.getPlayerInfo=this.getPlayerInfo.bind(this);
        this.sendPlayerInfo=this.sendPlayerInfo.bind(this);
        this.selectedTab=this.selectedTab.bind(this);
        this.renderTab=this.renderTab.bind(this);
        
        this.selectedTab(0)
    }



    getPlayerInfo(summoner){
    const playerState=this.props.matchState;
    let rendering = <div/>;
        
      if (playerState==true){
          rendering=<Player /*param={summoner}*//>;
      }

      return rendering;
    }

    sendPlayerInfo(summoner){
      this.props.dispatch(playerDisplay(summoner));
    }

    getChampionsInfo(summoner){
      const championState=this.props.matchState;
      let rendering = <div/>;
          
        if (championState==true){
            rendering=<Player param={summoner}/>;
        }
  
        return rendering;
      }

    selectedTab(classIndex){
      //this.state.tabSelected=classIndex;
      this.props.dispatch(matchTabAction(classIndex));
    }

    renderTab(classIndex){
      let rendering =<div/>;

      if (classIndex===0){
        rendering=<TabPanel value={classIndex} index={classIndex} >
        {champion_mastery_by_player.map((champion,index)=>{
          while (index <2){
          //if (champion.championId == champion_info.id)
          //call API pour récup champion info
          //champion_info = résultat du call de l'API avec champion.championId
              return(champion.championId == champion_info.id ? 
                <img src = {"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" + champion.championId +".png"} key="cait-img"/>
               : 
               champion_info.name);
              }
               // <div>{champion.championId}</div>
              //)
        })}
          {player_1.name}
          {rank_info.map((info,index)=>
            info.tier)
          }
      </TabPanel>;
      }
      else{
        if (classIndex===1){
          rendering= <TabPanel value={classIndex} index={classIndex}>
                
          <Player>
          </Player>

      </TabPanel>
        }
      }

      return(rendering);

    }
    

    render(){
        return(
            <div>

                <Grid container alignItems="center" >
            <AppBar position="static" >
                <Tabs 
                     value={0} 
                    // onChange={} 
                    aria-label="simple tabs example"
                    centered
                >
                <Tab className="team_blue" label="Votre équipe" onClick={()=>{this.selectedTab(0)}} />
                <Tab className="team_red" label="Equipe adverse" onClick={()=>{this.selectedTab(1)}}  /> 
                </Tabs>
            </AppBar>
            
            {this.renderTab(this.props.matchTabState)}
            
            {/* <Divider orientation="vertical"/> */}
            
        </Grid>
            </div>
        )
    }


}

const mapStateToProps =(state,ownProps)=>{
  return{
      playerState: state.playerReducer,
      matchTabState: state.matchTabReducer,
      championState: state.championsReducer
      }
}

export default connect(mapStateToProps)(MatchModel);