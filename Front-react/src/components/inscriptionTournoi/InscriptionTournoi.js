import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import TopBar from '../home/topSide/TopBar';
import { connect } from 'react-redux';
import {AddTeam} from '../../actions';


var axios=require('axios') ;

class InscriptionTournoi extends Component{
    constructor(props){
        super(props);
        this.state={  
            
        }
        this.sendSubscribeTeam= this.sendSubscribeTeam.bind(this);
        this.sendSubscribeTeam();
    }
    handleSubmit(event) {
        event.preventDefault();
      }
    sendSubscribeTeam() {
        let self = this;
        let team = {};
        /*user.name=name;
        user.surname=surname;
        user.isAdmin=isAdmin;
        user.email=email;
        user.password= password;*/
       
    
        // axios.put("http://localhost:8083/tournament", tournament)
        //                 .then(function (response) {
                                
        //                     })
        //                     .catch(function(error){
        //                         console.log(error);
        //                     })
        //                 }
    }
    render(){
        return(
            <div>
                
                <Form>
                {/* <Form.Group controlId="email">
                    <Form.Label>Email du joueur</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group> */}
                    <Form.Group controlId="teamName">
                    <Form.Label> Team name </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="playerName1">
                    <Form.Label> Pseudo 1 </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="playerName2">
                    <Form.Label> Pseudo 2 </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="playerName3">
                    <Form.Label> Pseudo 3 </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="playerName4">
                    <Form.Label> Pseudo 4 </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="playerName5">
                    <Form.Label> Pseudo 5 </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Button variant="primary" onClick={()=>{this.sendSubscribeTeam()}} type="submit">
                    Envoyer
                </Button>
                </Form>
            </div>
            
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      team: state.teamReducer.team
    }
  };
  export default connect(mapStateToProps)(InscriptionTournoi);