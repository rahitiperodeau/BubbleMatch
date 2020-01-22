// import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import {connect} from 'react-redux';


// const genArr = (nb)=>{
//     let arr=[];
//     for(let i=0;i<nb;i++){
//         arr.push(i);
//     }
//     return(arr)
// }

// class EquipesTabInput extends Component{
//     constructor(props){
//         super(props);

//         this.updateEquipes=this.updateEquipes.bind(this);
//     }

//     updateEquipes(teamName,playersList){
//         console.log("teamName")
//         console.log(teamName)
//         console.log("playersList")
//         console.log(playersList)
//         let team = {
//             "teamName":teamName,
//             "players":[]
//         }
//         for (let i=0;i<playersList.length;i++){
//             team.players.push(
//                 {
//                     "playerName":playersList[i]
//                 }
//             )
//         }
//         this.props.dispatch(addTeamGenTournoiAction(team));
//     }
    


//     render(){
//         console.log(this.props.infosTournoi)
//         let self=this;
//         return(
//             <div>
//                 <div>
//                     <div>Nom équipe</div>
//                     <TextField id="nom-equipe" label="Nom Equipe" variant="filled" />
//                 </div>
//                 <div>
//                     {genArr(5).map((index,i)=>{
//                         return(
//                             <div key={self.props.teamNumber+i} className={'equipe'+i.toString()} >
//                                 <div>Joeur {i} </div>
//                                 <TextField id={'player'+i.toString()}  />
//                                 </div>
//                         )
//                     })}
//                 </div>
//                 <div>
//                 <Button onClick={()=>{this.updateEquipes(
//                     document.getElementById("nom-equipe").value,
//                     [document.getElementById("player0").value,
//                     document.getElementById("player1").value,
//                     document.getElementById("player2").value,
//                     document.getElementById("player3").value,
//                     document.getElementById("player4").value]
//                 )}}>Enregistrer cette équipe</Button>
//                 </div>

    
//             </div>
//         )
//     }
// }
// export default connect()(EquipesTabInput);