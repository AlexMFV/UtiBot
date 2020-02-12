const Discord = require('discord.js');
const auth = require('./auth.json');
const func = require('./methods.js')
/* const logger = require('winston'); */

const bot = new Discord.Client();

//When the bot logs in to the server
bot.on('ready', () =>{
  console.log("Logged in!");
});

//When a user writes a message on the server
bot.on('message', msg => {
  if(msg.content[0] == '<' && msg.content[1] == '>'){
    let command = msg.content.substring(2);
    let args = command.split(' ');

    switch(args[0]){
      case 'ping': func.ping(msg, args); break;
      case 'avatar': func.avatar(msg, args); break;
      case 'epoch': func.epoch(msg); break;
      default: func.invalid(msg); break;
    }
  }
});

//Login the bot to the server
bot.login(auth.token);
