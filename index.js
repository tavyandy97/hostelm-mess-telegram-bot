const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const port = process.env.PORT;
const bot = new TelegramBot(token, {
  polling: true,
});
var app = express();

const {getMenu} = require('./data/menu');

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Breakfast'],
        ['Lunch'],
        ['Dinner']
      ]
    })
  };
  var response = getMenu(msg.text);
  bot.sendMessage(chatId, response , opts);
});

app.listen( port , () => {
  console.log(`Started listening to port : ${port}...`);
});