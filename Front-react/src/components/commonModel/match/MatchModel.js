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


import {player_1} from '../../../data/data_player';
import {champion_mastery_by_player} from '../../../data/data_champions';
import {rank_info} from '../../../data/data_rank';
import {champion_info} from '../../../data/data_champion';
import {perfect_player} from '../../../data/perfect_player';
import {team_blueside} from '../../../data/team_blueside';
import {team_redside} from '../../../data/team_redside';



import {getSummoner} from '../../../api/index'



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


function MatchFunction(team1, team2){
    let team_blueside= team1.param;
    let team_redside = team2.param
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const summonerName = "Rospote";

    return(
        <Grid container alignItems="center" className={classes.root}>
            <AppBar position="static" >
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="simple tabs example"
                    centered
                >
                <Tab label="Votre équipe" {...a11yProps(0)} />
                <Tab label="Equipe adverse" {...a11yProps(1)} /> 
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              {champion_mastery_by_player.map((champion,index)=>{
                while (index <1){
                //if (champion.championId == champion_info.id)
                //call API pour récup champion info
                //champion_info = résultat du call de l'API avec champion.championId
                    return(champion.championId == champion_info.id ? 
                      <img src = {"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" + champion.championId +".png"}/>
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
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Player param={team_redside}>
                </Player>

            </TabPanel>
            
            <Divider orientation="vertical"/>
            
        </Grid>
    );
}


//model d'un match
class MatchModel extends Component{
    constructor(props){
        super(props);
        this.state={
            

        }
    }

    static get TEAM_ONE(){
        return "team_one";
    }
    
    static get TEAM_TWO(){
        return "team_two";
    }

    render(){
        return(
            <div>
                <MatchFunction param={team_blueside,team_redside}/>
            </div>
        )
    }


}

export default MatchModel;