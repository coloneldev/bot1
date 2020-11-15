const Discord = require('discord.js');

exports.run = function (client, message) {
	message.channel.send({
  		files: ['https://aws1.discourse-cdn.com/business6/uploads/glitch/original/2X/5/5e5484c878cd7efc4b6c7eb64b20b249cd4d0677.png']
  })
  setTimeout(function(){}, 3000);
  message.channel.send('Allo Huston, Vous me recevez ?')
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['plouc'],
    permLevel: 0
};
  
  exports.help = {
    name: 'test',
    description: 'Hmmm...',
    usage: 'test'
};
