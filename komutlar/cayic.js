const ballAnswers = require('../cayic.json');
var Discord =  require("discord.js");
exports.run = function(client, message, args){
  const cay =new  Discord.RichEmbed()
	  .setAuthor("İsteyen: " + message.author.username +   " ", message.author.avatarURL)
	.setColor("RANDOM")
  .setImage(ballAnswers[Math.floor(Math.random() * 2) +1])
  return message.channel.send(cay);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çayiç',
  description: 'Size çay ısmarlar.',
  usage: 'çayiç'
};
