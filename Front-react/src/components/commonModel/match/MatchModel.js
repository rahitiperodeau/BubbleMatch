import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Player from '../player/Player'

import { connect } from 'react-redux';

import {team_blueside} from '../../../data/team_blueside';
import {team_redside} from '../../../data/team_redside';
import {playerDisplay,matchTabAction,championsDisplay, setTeamToDisplay} from '../../../actions'




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

//model d'un match
class MatchModel extends Component{
    constructor(props){
        super(props);
        this.state={
          tabSelected:1,
        }


        //this.getPlayerInfo=this.getPlayerInfo.bind(this);
        this.sendPlayerInfo=this.sendPlayerInfo.bind(this);
        this.selectedTab=this.selectedTab.bind(this);
        this.renderTab=this.renderTab.bind(this);
        this.sendTeamInfo=this.sendTeamInfo.bind(this);

        
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

    sendTeamInfo(list_team){
      this.props.dispatch(setTeamToDisplay(list_team));
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
          <div>
            <Player
            team={team_blueside}
            />
          </div>
          {/* <div>En cours de Dev</div> */}
      </TabPanel>;
      }
      else{
        if (classIndex===1){
          rendering= <TabPanel value={classIndex} index={classIndex}>
                
          <Player
           team={team_redside}
          />

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
            
            <Divider orientation="vertical"/>
            
        </Grid>
            </div>
        )
    }


}

const mapStateToProps =(state,ownProps)=>{
  return{
      playerState: state.playerReducer,
      matchTabState: state.matchTabReducer,
      championState: state.championsReducer,
      listPlayersReducer: state.listChampionsReducer
      }
}

export default connect(mapStateToProps)(MatchModel);