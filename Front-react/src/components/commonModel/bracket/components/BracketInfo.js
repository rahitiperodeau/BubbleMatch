import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {connect} from 'react-redux';
import { BracketInfosTableFunc } from './BracketInfosTable';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
  
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 100,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        
    },
}));


function BracketInfosFunction(obj){
    console.log(obj.param)
    const classes = useStyles();
    const [value,setValue]=React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const resultMatch =()=>{
        let rendering= <div>Match pas encore joué</div>
        if (obj.param[2].result!==undefined || obj.param[2].result!==null){
            if (obj.param[2].result==1){

                rendering=<div>Winner: {obj.param[0].teamName}</div>
            }
            else{
                if (obj.param[2].result==2){
                    rendering=<div>Winner: {obj.param[1].teamName}</div>

                }
            }
            
        }
        return rendering;
    }
    
    return(
        <div>
            <div>Match: {obj.param[2].matchId}</div>
            <br/>
            <div>{resultMatch()}</div>
            <div className={classes.root}>
                
                <Tabs 
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Match Info tab"
                    className={classes.tabs}
                >

                    <Tab label={obj.param[0].teamName} {...a11yProps(0)} />
                    <Tab label={obj.param[1].teamName} {...a11yProps(1)} />

                </Tabs>
                <TabPanel value={value} index={0}>
                <BracketInfosTableFunc infoTeam={obj.param[0]} />
                </TabPanel> 
                <TabPanel value={value} index={1}>
                <BracketInfosTableFunc infoTeam={obj.param[1]} />
                </TabPanel>         
            </div>
        </div>
    )

}

class BracketInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let self =this;
        console.log("self.props.team1R")
        console.log(self.props.team1R);

        console.log("self.props.team2R")
        console.log(self.props.team2R)
        if(
            (Object.keys(self.props.team1R).length===0 && self.props.team1R.constructor===Object) ||
            (Object.keys(self.props.team2R).length===0 && self.props.team2R.constructor===Object) ||
            self.props.team1R===undefined ||
            self.props.team2R===undefined
            ){
                return(

                    <div></div>

                )
        }
        else{
            return(
                <div>
                    <BracketInfosFunction param={[self.props.team1R,self.props.team2R,self.props.matchClicked]} />
                </div>
            )
        }
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        team1R: state.team1InfosReducer,
        team2R:state.team2InfosReducer,
        matchClicked:state.matchBracketReducer
    }
}
export default connect(mapStateToProps)(BracketInfo);
