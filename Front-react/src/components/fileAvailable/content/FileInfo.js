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

      checkDeleteAuth(){
        if(this.props.user.isAdmin){
          return <DeleteFile 
          fileId ={this.props.item.id}
          folderId={this.props.folderId}>
         </DeleteFile>
        }else{
          return ""
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
                   {this.checkDeleteAuth()}
                   </td>
            </tr>
                
          
       )
      }
}

const mapStateToProps = (state,ownProps) => {
  return{
    user: state.userReducer.user
  }
}
export default connect(mapStateToProps)(FileInfo);
