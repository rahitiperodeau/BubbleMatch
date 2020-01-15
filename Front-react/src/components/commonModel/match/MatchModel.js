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


function MatchFunction(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

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
                votre équipe
            </TabPanel>
            <TabPanel value={value} index={1}>
                équipe adverse
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
                <MatchFunction/>
            </div>
        )
    }


}

export default MatchModel;