require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const processMessage = require('./process-message');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//send message to display with the bot
app.post('/chat', (req, res) => {
  const { message,userId } = req.body;
  
  processMessage(message,userId);
});

//Create the server on the port 5000
app.set('port', process.env.PORT || 5050);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});