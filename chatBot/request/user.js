const fetch = require('node-fetch');

//function which returns userInfo
const getUserInfo = userId =>

    fetch(
        'http://localhost:8082/user/' +userId
    )
    .then(response => response.json())
    .then(data => {
        const name = data.name;
        const surname = data.surname;
        const email = data.email;
        const userInfo = ' name : '+ name + 
        ' | surname : ' +surname + 
            ' | email : ' +email;
    
        
        return userInfo;

    })
    .catch(error => console.log(error));


//function which returns userInfo
const getUserTournamentInfo = userId =>

    fetch( 
        'http://localhost:8082/tournament/' +userId //TODO change request
    )
    .then(response => response.json())
    .then(data => {
        
        const tournamentList = ' name : '+ name + 
        ' | id : ' +id + 
            ' | info : ' +info;
    
        
        return tournamentList;

    })
    .catch(error => console.log(error));


const getTournamentInfoFromFile = (fileId,question) =>

    fetch( 
        'http://localhost:5000/getResponseFromRules/' +fileId + '/' +question+'/' 
    )
    .then(response => response.json())
    .then(data => {
        
        const rulesReponse = 'From the rules, the best paragraph which could repond you is this one : \n' + data;
    
        
        return rulesReponse;

    })
    .catch(error => console.log(error));

module.exports = getUserInfo,getTournamentInfoFromFile,getUserTournamentInfo;