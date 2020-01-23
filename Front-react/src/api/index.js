import axios from "axios";
import React from "react";
import sendPlayerInfo from '../components/commonModel/match/MatchModel'

//A CHNAGER CHAQUE JOUR
export const api_key = "RGAPI-bfe5a648-79aa-495f-a5d9-a769a00e36b7";

// get a summoner by summonerName
export function getSummoner(summonerName) {

    //let res;
    axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`) .then(function (response) {
      if (response.data !== undefined && response.data != ""){
          
          //selfState.name = responseHttp.name;
          //selfState.surname = responseHttp.surname;
          //selfState.email = responseHttp.email;
          this.props.dispatch(sendPlayerInfo(response.data))
          return response.data;

          
      
      }else{
          alert("error no response from server")
          //res = {};
          return {}
      };
    })
    console.log(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`);
    //const res = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Rospote?api_key=RGAPI-2466e900-3827-4ea3-afc5-3e7cf66ff42b`);
    //console.log(res.data);

    
    //return res;
  

}
