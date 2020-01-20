const fetch = require('node-fetch');





module.exports = {
    getUserTournamentInfo: function (userId) {
       
        return fetch( 
            'http://localhost:8082/players/' +userId //TODO change request
        )
        .then(response =>  response.json())
        .then(data => {
            
            
            let tournamentList = [];
            
            for(var i= 0; i < data.length; i++)
                {
                    tournamentList.push(data[i].playerId) ;
                }

        
           
            return tournamentList;
    
        })
        .catch(error => console.log(error));

       
        
    
    },
    getTournamentInfoFromFile: function (fileId,question) {
        console.log(question);
        return fetch( 
            'http://localhost:5000/getResponseFromRules/' +fileId + '/' +question+'/' 
        )
        .then(response => response.text())
        
        .then(response => {
            
            const rulesReponse = 'From the rules, the best paragraph which could repond you is this one : \n' + response;
        
            
            return rulesReponse;
    
        })
        .catch(error => console.log(error));
    
    },
    getTournamentId: function (playerId){

        return fetch( 
            'http://localhost:8083/tournamentId/' +playerId //TODO change request
        )
        .then(response =>  response.json())
        .then(data => {
            
            return data;
    
        })
        .catch(error => console.log(error));
       
      },
    getFilesId: function (tournamentId){
        return fetch( 
            'http://localhost:8090/files/' +tournamentId //TODO change request
        )
        .then(response =>  response.json())
        .then(data => {
            let returnArray = [];
            for(var i= 0; i < data.length; i++)
            {
                returnArray.push({
                    fileName : data[i].fileName,
                    fileId : data[i].id
                })
            }
            console.log(returnArray)
            return returnArray;
    
        })
        .catch(error => console.log(error));
    }
      
  };

