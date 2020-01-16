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

module.exports = getUserInfo;