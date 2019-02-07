require('dotenv').config();
var botmetrics = require('node-botmetrics')(process.env.BOTMETRICS_TOKEN);

var logRequest = (meal , chatId) => {
  botmetrics.track({
    text: meal,
    message_type: 'incoming',
    user_id: chatId,
    platform: 'telegram'
  });
}

var logResponse = (menu , chatId) => {
  botmetrics.track({
    text: menu,
    message_type: 'outgoing',
    user_id: chatId,
    platform: 'telegram'
  });
}

module.exports = { logRequest , logResponse }