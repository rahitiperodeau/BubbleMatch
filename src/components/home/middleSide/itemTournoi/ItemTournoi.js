import React, {Component} from 'react';
import {Image,Figure,Button} from 'react-bootstrap';
import tournoiImage from '../../../../img/tournoi.png';
import './css/ItemTournoi.css';

class Tournoi extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            
                
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        src={tournoiImage}
                    />
                    <Figure.Caption className="caption">
                    <Button href="/tournoi">Votre tournoi</Button>
                    </Figure.Caption>
                </Figure>
        )
    }
}
export default Tournoi;