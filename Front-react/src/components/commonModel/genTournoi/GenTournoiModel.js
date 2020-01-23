import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import EquipesTab from './components/EquipesTab';
import { connect } from 'react-redux';
import {store} from '../../../App';
import {setInfoGenTournoiAction} from '../../../actions/index';
import {Form} from 'react-bootstrap';


var axios = require('axios');

class GenTournoiModel extends Component{
    constructor(props){
        super(props);
        this.state={
        }
        this.setInfoGenTournoi=this.setInfoGenTournoi.bind(this);
    }   

    setInfoGenTournoi(nameTournament,description){
        console.log(description)        
        if (nameTournament===undefined || description ===undefined || nameTournament==="" || description ===""){
            alert("veuillez renseigner tous les champs");
        }
        else{
            axios.post(`http://localhost:8083/tournament`,{
                "name":nameTournament,
                "description":description,
                
            })
            .then(function(response){
                console.log(response);
                window.location = "/autresTournois"
            }).catch(function(err){
                window.location = "/autresTournois"
            }).finally(function(a){
                window.location = "/autresTournois"
            })

            // let info =
            // {
            //     "nomTournoi":nameTournament,
            //     "desc":description
            // };
            // this.props.dispatch(setInfoGenTournoiAction(info));
        }

    }



    render(){
        let self=this;
        return(
        <div>
            <div>
                <h1>Create a new tournament</h1>
                <form className="form" noValidate>
                    <div>
                        <div>Tournament Name</div>
                        <TextField id="nom-tournoi" label="Nom Tournoi" variant="filled" />
                    </div>
                    
                    <div>
                        <Form.Group>
                            <Form.Label>Tournament Description</Form.Label>
                            <Form.Control id="desc-tournoi" as="textarea" rows="3" />
                        </Form.Group>


                        {/* <select id="nbEquipes">
                            {arr64().map((index,i)=>{
                                return(
                                <option key={i} value={index}>{index}</option>
                                )
                            })}
                        </select> */}
                    </div>
                    
                    <div>
                        <Button 
                            onClick={()=>{self.setInfoGenTournoi(
                                document.getElementById("nom-tournoi").value,
                                document.getElementById("desc-tournoi").value
                                )}}
                        >
                            Create a tournament
                        </Button>
                    </div>
                </form>
            </div>
            

        </div>
        )
    }
}
const mapStateToProps =(state,ownProps)=>{
    return{
        infosTournoi:state.setInfoTournoiGenReducer,
        
    }
}
export default connect(mapStateToProps)(GenTournoiModel);