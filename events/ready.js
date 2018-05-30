const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const snekfetch = require('snekfetch');

var prefix = ayarlar.prefix;

module.exports = client => {
	
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı.');

    var Games = [
	    
	`${prefix}yardım ✨`,
	    
        "Her akşam 22:00`da canlı yayını kaçırma.!",
    
        `${prefix}davet arkadaşlarını davet et. ✨`,
		
		`${client.users.size} kullanıcı ✨`,
		
		
		
		
	    
	    	


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/oaonair");
        }, 2 * 2500);

};
