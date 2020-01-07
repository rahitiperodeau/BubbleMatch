import React, {Component} from 'react';
import ChatBot from './chatbot/ChatBot';
import Match from './match/Match';
import Tournoi from './tournoi/Tournoi';
import {Container,Row,Col} from 'react-bootstrap';


class MiddleSide extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="middleSide">
            
                <Container>
                    <Row>
                        <Col xs={4} md={5}>
                            <Match/>
                        </Col>
                        <Col xs={1} md={4}>
                            <Tournoi/>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col xs={1} md={4}>
                            <ChatBot/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default MiddleSide;