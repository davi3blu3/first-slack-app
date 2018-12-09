const request = require('request');

const url =
  'https://hooks.slack.com/services/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'; // add app extension

let payload = {
  text: '*Select a day for trivia this week:*',
  attachments: [
    {
      text:
        ":one: Sunday \n :two: Monday \n :three: Tuesday \n :four: Wednesday \n :five: Thor's Day",
      fallback: 'You are unable to choose a game',
      callback_id: 'wopr_game',
      color: '#3AA3E3',
      attachment_type: 'default',
      actions: [
        {
          name: 'game',
          text: ':one:',
          type: 'button',
          value: 'one'
        },
        {
          name: 'game',
          text: ':two:',
          type: 'button',
          value: 'two'
        },
        {
          name: 'game',
          text: ':three:',
          type: 'button',
          value: 'three'
        },
        {
          name: 'game',
          text: ':four:',
          type: 'button',
          value: 'four'
        },
        {
          name: 'game',
          text: ':five:',
          type: 'button',
          value: 'five'
        }
      ]
    }
  ]
};
payload = JSON.stringify(payload);

request.post(
  {
    url: url,
    body: payload
  },
  function(err, data) {
    console.log(data.body);
    if (err) {
      console.log('Error: ', data.body);
    }
  }
);
