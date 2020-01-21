import React, {Component} from 'react';
import {Nav,Navbar,Dropdown,Badge} from 'react-bootstrap';
import './css/TopBar.css';
import {profileImage} from '../../../img/profile.png';
import { connect } from 'react-redux';

class TopBar extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            
                <Navbar className="navBar">
                    <div>
                    <Navbar.Brand className="brand" href="/home">
                            BubbleMatch
                        </Navbar.Brand>
                        <Navbar.Brand className="brand">
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                Tournaments
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item > La Grosse Ligue </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        
                        </Navbar.Brand>
    
                        
                        <Navbar.Brand className="brand" href="/autresTournois">
                            Plus
                        </Navbar.Brand>
                        <Navbar.Brand className="myUser" >
                            {sessionStorage.getItem("userId")}
                        </Navbar.Brand>
                        
                        <Navbar.Brand className="uploadFile" href="/upload">
                            upload file
                        </Navbar.Brand>
                        <Navbar.Brand className="signOut" href="/signOut" id="barDec">
                            Disconnect
                        </Navbar.Brand>
                        <Navbar.Brand className="myAccount" href="/myAccount" id="bar">
                            My account
                        </Navbar.Brand>
                    
                    </div>
                    
                </Navbar>

                
            
        )
    }

}

export default TopBar;