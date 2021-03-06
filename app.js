const { WebClient } = require('@slack/client');

// // An access token (from your Slack app or custom integration - xoxa, xoxp, or xoxb)
// const token = process.env.SLACK_TOKEN;

// const web = new WebClient(token);

// // This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
// const conversationId = 'C1232456';

// // See: https://api.slack.com/methods/chat.postMessage
// web.chat
//   .postMessage({ channel: conversationId, text: 'Hello there' })
//   .then(res => {
//     // `res` contains information about the posted message
//     console.log('Message sent: ', res.ts);
//   })
//   .catch(console.error);

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  console.log('web app visited');
  res.send('api is running!');
});

app.get('/trivia', (req, res, next) => {
  console.log('trivia get received!');
  res.send('api hit');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
