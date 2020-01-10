import React, {Component} from 'react';
import {Image,Figure,Button} from 'react-bootstrap';
import matchImage from '../../../../img/match.png';
import './css/ItemMatch.css';

class Match extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        src={matchImage}
                    />
                    <Figure.Caption className="caption">
                        <Button href="/match">Votre match</Button>
                    </Figure.Caption>
                </Figure>
        )
    }
}
export default Match;