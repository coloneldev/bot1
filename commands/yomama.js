const Discord = require('discord.js');
const fetch = require('snekfetch');

const emoji = 'Yomama';
module.exports.run = async (client, message) => {
    fetch.get('https://api.apithis.net/yomama.php').then(joe => {
        const joke = new Discord.RichEmbed()
    .addField(`${emoji[~~(Math.random() * emoji.length)]}`, joe.body);
        message.channel.send({embed: joke}).catch(e => logger.error(e));
    })
  .catch(e => logger.error(e));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y'],
    permLevel: 0
};
  
  exports.help = {
    name: 'yomama',
    description: 'ein',
    usage: 'y'
};