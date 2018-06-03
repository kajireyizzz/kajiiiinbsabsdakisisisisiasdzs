const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

   const ekip = new Discord.RichEmbed()
      .setColor("RANDOM")
       .setTitle("DEV GÜNCELLEME")
       .addField("Discord.JS-Commando sistemine geçiyoruz","Nedir bu Discord.JS-Commando ?\nDiscord`un standart sabit Discord.js modülünün daha geniş kapsamlı kodlara dönüşmesini ve bizlere kolaylık sağlayan bir tür modüldür.")
       .addField("Peki neler değişecek","Hemen hemen herşeyi en baştan sıfırdan değiştireceğim tek başıma her ne kadar yorucu olacaksada herşey sizler için.")
       .addField("Ne zaman gelecek güncelleme","Yeni güncellemenin hemen hemen 3/1`lik bir kısmı bitmiş bulunmakta ancak yeni yeni bu frameworkü gördüğüm için yabancılık çekiyorum kodlara karşı en kısa zamanda elimden geldiğince hızlı bir şekilde bitirmeye çalışacağım.\nHepinize Sonsuz Teşekkürler **Penia**")
       .setFooter("DEV GÜNCELLEME")
   message.channel.send(ekip);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilik',
  description: 'Yetkililer hakkında bilgi verir.',
  usage: 'yenilik'
};
