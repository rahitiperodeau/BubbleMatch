import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import TopBar from '../home/topSide/TopBar';


class InscriptionTournoi extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                
                <Form>
                <Form.Group controlId="email">
                    <Form.Label>Email du joueur</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="username">
                    <Form.Label>Pseudo</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="phone-number">
                    <Form.Label>Numéro de téléphone</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
                </Form>
            </div>
            
        )
    }
}

export default InscriptionTournoi;