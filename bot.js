require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("ok"); res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));
const Discord = require('discord.js');
const hook = require('node-webhooks');
const auth = require('./auth.json');
const func = require('./methods.js');
const fetch = require('node-fetch');
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

    switch(args[0].toLowerCase()){
      case 'ping': func.ping(msg, args); break;
      case 'epoch': func.epoch(msg); break;
      case 'tweets': func.tweetsWebhook(msg, args); break;
      case 'fact': randomFactAsync(msg); break;
      default: func.invalid(msg); break;
    }
  }
});

//Login the bot to the server
bot.login(auth.token);

async function randomFactAsync(msg){
  let response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
  let data = await response.json();
  func.randomFact(msg, data.text);
}
