const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = function (client, message) { // Le script à exécuter
  if (message.author.id == "763797022481580071") {
    message.reply('Je vais redémarrer tout de suite. :white_check_mark:')
    client.destroy();
    client.login(settings.token);
    message.reply('Je suis de retour ! :white_check_mark:')

  } else {
      message.reply('Vous n\'avez pas les autorisations nécéssaires : `BOT_MANAGER` :x:')
    }
   };



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reset'], //Autres façons d'appeler la commande
    permLevel: 0
};
  
  exports.help = { //Si l'utilisateur tape  ;help <Commande>
    name: 'restart',
    description: 'Redémarre le bot',
    usage: 'restart'
};