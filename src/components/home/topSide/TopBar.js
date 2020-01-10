import React, {Component} from 'react';
import {Nav,Navbar,Dropdown,Badge} from 'react-bootstrap';
import './css/TopBar.css';
import {profileImage} from '../../../img/profile.png';

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
                        <Navbar.Brand className="brand">
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                LOL
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Championnat d'Italie</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >Grand Prix</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        
                        </Navbar.Brand>

                        <Navbar.Brand className="brand">
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Super Smash Bros
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Championnat de France</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >CLT SLG Super Smash Bros</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        
                        </Navbar.Brand>
                        
                        <Navbar.Brand className="brand" href="/home">
                            BubbleMatch
                        </Navbar.Brand>    
                        <Navbar.Brand className="brand" href="/profil" >
                            Profil
                        </Navbar.Brand>
                        <Navbar.Brand className="brand" href="/autresTournois">
                            Plus
                        </Navbar.Brand>
                        <Navbar.Brand className="myUser" >
                            {sessionStorage.getItem("sessionId")}
                        </Navbar.Brand>
                    
                    </div>
                    
                </Navbar>

                
            
        )
    }

}
export default TopBar;
