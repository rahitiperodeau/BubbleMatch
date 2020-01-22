import React, {Component} from 'react';
import MiddleSide from './middleSide/MiddleSide';
import './css/Home.css'
import { connect } from 'react-redux';

import {getUserId} from '../../lib/authFunction'


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
        getUserId(sessionStorage.getItem("sessionId"));
    }

    render(){
        //this.getUserId(sessionStorage.getItem("sessionId"));
        return(
            <div className="home">
                <MiddleSide/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.userReducer,
    }
  };
  
//export the current classes in order to be used outside
export default connect(mapStateToProps)(Home);

