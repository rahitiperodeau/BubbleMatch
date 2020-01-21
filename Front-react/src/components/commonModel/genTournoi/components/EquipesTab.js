import React, { Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {connect} from 'react-redux';
import EquipesTabInput from './EquipesTabInput';

import {equipesTabIndexAction} from '../../../../actions';


const genNbEquipes =(nb)=>{
    let arr = [];
    for(let i=0;i<nb;i++){
        arr.push(i);
    }
    return(arr);
}


class EquipesTab extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.genTabs=this.genTabs.bind(this);
        this.genTabPanel=this.genTabPanel.bind(this);
        this.selectedTab=this.selectedTab.bind(this);
    }

    genTabs(){
        let self=this;
        let rendering=<div></div>;
        if (self.props.infosTournoi.tournamentInfos.nbEquipes!==undefined){
            rendering = genNbEquipes(self.props.infosTournoi.tournamentInfos.nbEquipes).map((index,i)=>{
                return(
                    <Tab key={i} id={"equipe-tab-"+{i}} label={"Equipe "+index.toString()} value={i} onClick={()=>{this.selectedTab(i)}} />
                );
            }) 
        }
        return rendering;
    }

    selectedTab(tabIndex){
        this.props.dispatch(equipesTabIndexAction(tabIndex));
    }

    genTabPanel(){
        let self=this;
        let rendering=<div></div>;
        if (self.props.infosTournoi.tournamentInfos.nbEquipes!==undefined && self.props.tabSelected!==undefined){
         
            rendering= <div id={self.props.tabSelected} key={self.props.tabSelected} value={self.props.tabSelected}>
                <EquipesTabInput 

                    infosTournoi={self.props.infosTournoi.tournamentInfos}
                    teamNumber={self.props.tabSelected}
                />
            </div>
        }
        return rendering;
    }

    render(){
        let self=this;
        console.log(this.props.infosTournoi)
        return(
            <div>

                <div className="equipe_tab_root">
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        //value={value}
                        //onChange={handleChange}
                        
                    >
                      
                        {this.genTabs()}
        
                    </Tabs>
                    {this.genTabPanel()}
                </div>


            </div>
        );
    }
}
const mapStateToProps =(state,ownProps)=>{
    return{
        infosTournoi:state.setInfoTournoiGenReducer,
        tabSelected:state.equipesTabIndexReducer
    }
}
export default connect(mapStateToProps)(EquipesTab);