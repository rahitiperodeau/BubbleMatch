import React, { Component } from 'react';
import Download from '../../download/Download'
import DeleteFile from '../../download/DeleteFile'
import { connect } from 'react-redux';

class FileInfo extends Component {
    constructor(props) {
        super(props);
        this.state ={
          
        }
       
      }

      

      render() {
        return (
            
            <tr key={this.props.item.id}>
               <td>{this.props.item.fileName}</td>
               <td>{this.props.item.uploadedDate}</td>
               <td><Download 
                        fileId ={this.props.item.id}>
                   </Download>
                   <DeleteFile fileId ={this.props.item.id}>
                   </DeleteFile></td>
            </tr>
                
          
       )
      }
}
export default connect()(FileInfo);