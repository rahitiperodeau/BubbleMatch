import { Component } from 'react';


class UserModel  extends Component {
    constructor(props){
        super(props);
        this.state={

            user:{
                id:null,
                name:null,
                surname:null,
                password:null,
                email:null,
                isAdmin:false
            }
            
        }


    }
}

export default UserModel;