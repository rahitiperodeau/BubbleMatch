
const recursiveNodes = (bracket,parentNode,pNode,depth)=>{
  let template={
    "name":"",
    "matchId":null,
    "result":null,
    "teamId1": null,
    "teamId2": null,
    "tournament_code": null,
    "step":depth-1,
    "children":[]
  }
  //let element;
  /*if (bracket[depth]!==undefined){
    element= bracket[depth].matchList.pop();
    
  }*/
  let temp= Object.assign({}, template);
  parentNode.children.push(pNode);
  if (depth!=0){
    pNode.children.push(temp);
    for(let j=0;j<pNode.children.length;j++){
      /*if(bracket[depth]!==undefined){
        pNode.matchId = element.matchId;
        pNode.result = element.result;
        pNode.teamId1 = element.teamId1;
        pNode.teamId2 = element.teamId2;
      }*/
      return (recursiveNodes(bracket,pNode,pNode.children[j],depth-1));
    }
  }
}

export const genTree =(brckt)=>{
  let bracketTmp = brckt
  let matchs = bracketTmp[0].matchList; //liste de matchs du 1er tour
  let steps = bracketTmp.length; //nb de tours qu'on a dans l'objet bracket
  let nbMatchs = matchs.length; // nb matchs premier tour
  //let nbEquipes=nbMatchs*2;
  let profondeur=Math.log(nbMatchs)/Math.log(2);
  let tree ={
    "name":"Finale",
    "matchId":null,
    "result":null,
    "teamId1": null,
    "teamId2": null,
    "tournament_code": null,
    "step":profondeur,
    "children":[]
  }
  let temp={
    "name":"Finale",
    "matchId":null,
    "result":null,
    "teamId1": null,
    "teamId2": null,
    "tournament_code": null,
    "step":profondeur,
    "children":[]
  }
  let child;
  let node = Object.assign({},tree);
  let x = Object.assign({},temp);
  //let listMatch = bracket[profondeur-1].matchList;
  child =recursiveNodes(bracketTmp,x,node,profondeur);



  return(node);
}





export  const bracket= [
        {
            "matchList": [
                {
                    "matchId": 1,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 2,
                    "step": 0
                },
                {
                    "matchId": 2,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 1,
                    "step": 0
                },
                {
                    "matchId": 3,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 1,
                    "step": 0
                },
                {
                    "matchId": 4,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 2,
                    "step": 0
                },
                {
                    "matchId": 5,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 1,
                    "step": 0
                },
                {
                    "matchId": 6,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 1,
                    "step": 0
                },
                {
                    "matchId": 7,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 1,
                    "step": 0
                },
                {
                    "matchId": 8,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 1,
                    "step": 0
                }
            ]
        },
        
        
        {
            "matchList": [
                {
                    "matchId": 9,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 1,
                    "step": 1
                },
                {
                    "matchId": 10,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 1,
                    "step": 1
                },
                {
                    "matchId": 11,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 1,
                    "step": 1
                },
                {
                    "matchId": 12,
                    "tournament_code": null,
                    "teamId1": 1,
                    "teamId2": 2,
                    "result": 1,
                    "step": 1
                }
            ]
        },
       
        
        
    ]

export const fillBracket = (hierarchyData,bracket)=>{
  let bracketTmp = bracket;
  let matchs = bracketTmp[0].matchList; //liste de matchs du 1er tour
  let nbMatchs = matchs.length; // nb matchs premier tour
  let tree=hierarchyData.copy();
  let i=0;
 
  let tmp_map=tree.copy().descendants();
  let tmp_mapBis=[]
  tmp_map.forEach((c_node)=>{
    if(c_node.data.step<bracketTmp.length){
      let matchTmp = bracketTmp[c_node.height].matchList[i];
      c_node.matchId=matchTmp.matchId;
      c_node.result=matchTmp.result;
      c_node.teamId1=matchTmp.teamId1;
      c_node.teamId2=matchTmp.teamId2;
      
      i++;
      if(i==bracketTmp[c_node.data.step].matchList.length){
        i=0
      }
      
    }
    tmp_mapBis.push(c_node)
    console.log(tmp_map)
    
  }) 
  console.log(tmp_mapBis);

  i=0
  let treeBis = tree.copy();
  treeBis.descendants().map((node)=>{
    node.matchId = tmp_mapBis[i].matchId;
    node.result=tmp_mapBis[i].result;
    node.teamId1=tmp_mapBis[i].teamId1;
    node.teamId2=tmp_mapBis[i].teamId2;
    i++;
  })
  console.log(treeBis)


  return (treeBis);
}



 