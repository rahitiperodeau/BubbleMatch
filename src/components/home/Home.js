import React, {Component} from 'react';
import MiddleSide from './middleSide/MiddleSide';
import './css/Home.css'


class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home">
                <MiddleSide/>
            </div>
        )
    }

}
export default Home;
