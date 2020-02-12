let Discord = require('discord.io');
let auth = require('./auth.json');
let logger = require('winston');

//Logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

let bot = new Discord.Client({
  token: auth.token,
  autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

/* bot.on('message', function(user, userID, channelID, message, evt){
  console.log(auth.token);
  let args = message.split('<>').split(' ')

  switch(args[0]){
    case ping: bot.sendMessage({
      to: channelID,
      message: "The bot is alive!"
    }); break;
    default: break;
  }
}); */
