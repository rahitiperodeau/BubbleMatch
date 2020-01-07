import React, {Component} from 'react';
import TopBar from './topSide/TopBar';
import MiddleSide from './middleSide/MiddleSide';


class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="home">
                <TopBar/>
                <MiddleSide/>
            </div>
        )
    }

}
export default Home;
