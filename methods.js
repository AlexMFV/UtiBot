function ping(msg, args){
  msg.channel.send('The bot is alive!');
}

function epoch(msg){
  let epoch = Math.floor(new Date().getTime()/1000.0);
  msg.channel.send('The current epoch is: ' + epoch);
}

function invalid(msg){
  msg.channel.send('Sorry, but that command doesn\'t exist!');
}

exports.ping = ping;
exports.avatar = avatar;
exports.epoch = epoch;
exports.invalid = invalid;
