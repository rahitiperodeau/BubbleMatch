// process-message.js

const Dialogflow = require('dialogflow');
const Pusher = require('pusher');
const getUserinfo = require('./request/user');

// You can find your project ID in your Dialogflow agent settings
const projectId = 'bubblematchbot-dqyeec'; //https://dialogflow.com/docs/agents#settings
const sessionId = '123456';
const languageCode = 'fr-FR';

const config = {
  credentials: {
    private_key: process.env.DIALOGFLOW_PRIVATE_KEY,
    client_email: process.env.DIALOGFLOW_CLIENT_EMAIL,
  },
};

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true,
});

const sessionClient = new Dialogflow.SessionsClient(config);

const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const processMessage = message => {
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
    .detectIntent(request)
    .then(responses => {
      const result = responses[0].queryResult;
      //console.log(request);
      //console.log(responses);
      if(result.intent.displayName === 'user.info.userId'){
        const userId = result.parameters.fields['number'].numberValue;
        
        return getUserinfo(userId).then(userInfo => {
          return pusher.trigger('bot','bot-response',{
            message : 'All your no-sensitive info are : ' + userInfo,
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