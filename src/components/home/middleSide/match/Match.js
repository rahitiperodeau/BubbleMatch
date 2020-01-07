import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import matchImage from '../../../../img/match.png';

class Match extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                 <Image src={matchImage} roundedCircle/>
            </div>
        )
    }
}
export default Match;