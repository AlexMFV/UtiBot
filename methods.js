function ping(msg, args){
  msg.channel.send('The bot is alive!');
}

function epoch(msg){
  let epoch = Math.floor(new Date().getTime()/1000.0);
  msg.channel.send('The current epoch is: ' + epoch);
}

//Future work: Allow the user to get another user's avatar
function avatar(msg, args){
    msg.channel.send(msg.author.avatarURL);
}

function tweetsWebhook(msg, args){
  switch(args[1].toLowerCase()){
    case 'add': tweetsAdd(msg, args[2]); break;
    default: invalid(msg); break;
  }
}

function tweetsAdd(msg, user){
  msg.channel.send("Get tweets from the user: " + user);
}

function invalid(msg){
  msg.channel.send('Sorry, but that command doesn\'t exist!');
}

function randomFact(msg, fact){
  msg.channel.send(fact);
}

exports.ping = ping;
exports.avatar = avatar;
exports.epoch = epoch;
exports.tweetsWebhook = tweetsWebhook;
exports.randomFact = randomFact;
exports.invalid = invalid;
