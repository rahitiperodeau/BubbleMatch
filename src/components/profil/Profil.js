import React, { Component } from 'react';
import User from '../commonModel/user/User';
import {Card,Button} from 'react-bootstrap';
import TopBar from '../home/topSide/TopBar';

import { connect } from 'react-redux';

class Profil extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div>
                <TopBar/>
                <h1>Profil</h1>
                {this.props.user}

                

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      
      user:   state.userReducer

    }
  };


export default connect(mapStateToProps)(Profil);

