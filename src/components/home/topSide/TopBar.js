import React, {Component} from 'react';
import {Nav,Navbar} from 'react-bootstrap';

class TopBar extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className="topBar">
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>BubbleMatch</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/profil">Profil</Nav.Link>
                        </Nav>
                </Navbar>

                
            </div>
        )
    }

}
export default TopBar;
