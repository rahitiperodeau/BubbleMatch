import React, {Component} from 'react';
import TopBar from './topSide/TopBar';
import MiddleSide from './middleSide/MiddleSide';
import './css/Home.css'


class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home">
                <TopBar className="topBar"/>
                <MiddleSide/>
            </div>
        )
    }

}
export default Home;
