const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");


exports.run = (client, message, params) => {
message.channel.send("Bu komut devredışı bırakılmıştır.!");



};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'istatistik' || 'i',
  description: 'Bot`un istatistik bilgierini verir.',
  usage: 'istatistik'
};
