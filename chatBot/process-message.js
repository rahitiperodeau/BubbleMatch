// process-message.js

const Dialogflow = require('dialogflow');
const Pusher = require('pusher');

//const {getUserinfo} = require('./request/user');
//require('./request/user');
//const getTournamentInfoFromFile,getUserTournamentInfo = require('./request/tournament');
//require('./request/tournament');
var tournamentF = require('./request/tournament');



// You can find your project ID in your Dialogflow agent settings
const projectId = 'bubblematch-hndsoe'; //https://dialogflow.com/docs/agents#settings
const sessionId = '123456';
const languageCode = 'fr-FR';

const config = {
  credentials: {
    private_key: process.env.DIALOGFLOW_PRIVATE_KEY,
    client_email: process.env.DIALOGFLOW_CLIENT_EMAIL,
  },
};

//Pusher is used to create e websocket between the API and the server node
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true,
});

//Create a session between chatbot and API 
const sessionClient = new Dialogflow.SessionsClient(config);

const sessionPath = sessionClient.sessionPath(projectId, sessionId);
let questionToSave;
//function which create the message to display
const processMessage = (message,userId) => {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode,
      },
    },
  };

 
  sessionClient
    .detectIntent(request) // get back the intent from the API
    .then(responses => {
      const result = responses[0].queryResult; 
      //console.log(request);
      //console.log(responses);
      if(result.intent.displayName === 'user.info.userId'){ //check the intent and call the right function (switch use)
        const userId = result.parameters.fields['number'].numberValue; // getback the entity detected by API
        
        return getUserinfo(userId).then(userInfo => { // we call getUserInfo
          return pusher.trigger('bot','bot-response',{
            message : 'All your no-sensitive info are : ' + userInfo,
          });
        });
      }
      
      
      else if(result.intent.displayName === 'tournament.info.question'){
        const tournamentId = result.parameters.fields['number'].numberValue; // getback the entity detected by API
        const question = result.parameters.fields['any'].stringValue;
        questionToSave = '"'+question+'"';
        console.log(question);

        
        return tournamentF.getFilesId(tournamentId).then(fileList => { // we call getUserInfo
          console.log(fileList)
          messageToPush = ' On which file do you want ask the question : "'
          fileList.forEach(element => messageToPush+= element.fileName + '"  id : ' + element.fileId + '  ');
          
          
            return pusher.trigger('bot','bot-response',{
              message : messageToPush ,
            });
          });
        
        
      }

      else if(result.intent.displayName === 'tournament.info.question.document'){
         // getback the entity detected by API
        const fileId = result.parameters.fields['number'].numberValue;
       

        console.log(questionToSave)
        return tournamentF.getTournamentInfoFromFile(fileId,questionToSave).then(rulesReponse => { // we call getUserInfo
          console.log(rulesReponse)
          
          
          
            return pusher.trigger('bot','bot-response',{
              message : rulesReponse ,
            });
          });
        
        
      }


      else if(result.intent.displayName === 'tournament.info'){
        
        return tournamentF.getUserTournamentInfo(userId).then(tournamentPlayerList => { // we call getUserInfo
          let messageToPush = ''
          for(var i= 0; i < tournamentPlayerList.length; i++)
          {
            
            
            return tournamentF.getTournamentId(tournamentPlayerList[i]).then(tournamentId => {
              messageToPush += 'you are currently following this tournament id : '+tournamentId + '.        '
              messageToPush += ' Do you have a question about tournament ? if yes please ask it and fill the tournament id.'
              return pusher.trigger('bot','bot-response',{
                message : messageToPush ,
              });
            });
         
          }
          
          
          
        });
      }


      return pusher.trigger('bot', 'bot-response', {
        message: result.fulfillmentText,
      });
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

module.exports = processMessage;