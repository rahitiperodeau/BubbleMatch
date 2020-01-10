import React, { Component } from 'react';
import UserInfo from './components/UserInfo';

import { connect } from 'react-redux';


class User extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }

        

    }

    

    render(){
        let mv =this.props.user;
        //this.getUserId(sessionStorage.getItem("sessionId"));
        return(
            <div className="panel-body">
                test = {this.props.user.state.email}
                <UserInfo
                    
                    id={this.props.user.state.id}
                    name={this.props.user.state.name}
                    surname={this.props.user.state.surname}
                    email={this.props.user.state.email}
                    
			
                />
            </div>
        )
    }

    
}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.userReducer
    }
  };
  
  //export the current classes in order to be used outside
export default connect(mapStateToProps)(User);