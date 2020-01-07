import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import tournoiImage from '../../../../img/tournoi.png';

class Tournoi extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            
                <Image src={tournoiImage} roundedCircle/>
            
        )
    }
}
export default Tournoi;