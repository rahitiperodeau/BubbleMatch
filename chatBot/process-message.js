// process-message.js

const Dialogflow = require('dialogflow');
const Pusher = require('pusher');

const {getUserinfo,getTournamentInfoFromFile,getUserTournamentInfo} = require('./request/user');

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
      }else if(result.intent.displayName === 'tournament.info.getTournaments'){
        const userId = result.parameters.fields['number'].numberValue; // getback the entity detected by API
        
        return getTournamentInfo(userId).then(tournamentList => { // we call getUserInfo
          return pusher.trigger('bot','bot-response',{
            message : ' ' + tournamentList,
          });
        });
      }
      else if(result.intent.displayName === 'tournament.info'){
        
        
        return getUserInfoTournament(userId).then(rulesReponse => { // we call getUserInfo
          return pusher.trigger('bot','bot-response',{
            message :  rulesReponse,
          });
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