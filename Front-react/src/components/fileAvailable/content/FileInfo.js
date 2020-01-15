import React, { Component } from 'react';

import { connect } from 'react-redux';

class FileInfo extends Component {
    constructor(props) {
        super(props);
        this.state ={
          
        }
       
      }

      

    

    
      render() {
        return (
            <div>
            <tr key={this.props.item.id}>
               <td>{this.props.item.fileName}</td>
               <td>{this.props.item.updatedDate}</td>
            </tr>
                
          </div>
       )
      }
}
export default connect()(FileInfo);