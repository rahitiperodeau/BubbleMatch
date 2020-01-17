import axios from "axios";
import React from "react";

//A CHNAGER CHAQUE JOUR
export const api_key = "RGAPI-06b39356-3132-43cc-bd7c-2ad265ab7f82";

// get a summoner by summonerName
export async function getSummoner(summonerName) {

    const res = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`);
    console.log(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`);
    //const res = await axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Rospote?api_key=RGAPI-2466e900-3827-4ea3-afc5-3e7cf66ff42b`);
    console.log(res.data);
    return await res.data;
  
  }

