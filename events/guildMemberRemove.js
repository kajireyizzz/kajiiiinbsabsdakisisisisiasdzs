const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
    let guild = member.guild;
    
    const channel = member.guild.channels.find('name', 'logs');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle(`@${member.user.username}#${member.user.discriminator} Sunucudan ayrıldı.`)
    .setThumbnail(member.user.avatarURL)
  
    
    .setTimestamp()
    .setFooter("giris-cikis sistemi>>OA Premium")
    channel.send(embed);
};
