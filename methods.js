function ping(msg, args){
  msg.channel.send('The bot is alive!');
}

function epoch(msg){
  let epoch = Math.floor(new Date().getTime()/1000.0);
  msg.channel.send('The current epoch is: ' + epoch);
}

function avatar(msg, args){
  //If the user did specify the user
  if(args.count > 1){
    msg.channel.send('Get ' + args[1])
  }
  else{

  }
}

function invalid(msg){
  msg.channel.send('Sorry, but that command doesn\'t exist!');
}

exports.ping = ping;
exports.avatar = avatar;
exports.epoch = epoch;
exports.invalid = invalid;
