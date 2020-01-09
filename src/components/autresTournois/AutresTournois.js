import React, {Component} from 'react';
import {Button,Card,CardGroup, Accordion} from 'react-bootstrap';
import './css/AutresTournois.css';
import TopBar from '../home/topSide/TopBar';


class AutresTournois extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <TopBar/>
                <h1>Autres tournois</h1>
                
                <Accordion>
                <Card className="cardTournoi">
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        La grosse Ligue
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    C’est la nouvelle compétition officielle dédiée aux étudiants post-bac.
                    Participez pour prouver votre valeur, faites-vous repérer et repartez avec des lots.
                    Inscrivez votre équipe dès maintenant !
                    <Button href="/inscriptionTournoi">S'inscrire</Button>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="cardTournoi">
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Ligue région PACA
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    Inscrivez votre équipe dès maintenant !
                    
                    <Button href="/inscriptionTournoi">S'inscrire</Button>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

                

            </div>
        )

    }

}
export default AutresTournois;