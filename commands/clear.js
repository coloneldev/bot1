const Discord = require('discord.js');
const {RichEmbed} = require('discord.js');
const chalk = require('chalk');
const { json } = require('express');

exports.run = function (client, message) { // Le script à exécuter
    // Check the following permissions before deleting messages:
    //    1. Check if the user has enough permissions
    //    2. Check if I have the permission to execute the command

    if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
      message.channel.sendMessage("Vous n\'avez pas les autorisations nécéssaires : `MANAGE_MESSAGES` :x:");
      return;
    }
    // Only delete messages if the channel type is TextChannel
    // DO NOT delete messages in DM Channel or Group DM Channel
    if (message.channel.type == 'text') {
      message.channel.fetchMessages()
        .then(messages => {
          message.channel.bulkDelete(100);
          messagesDeleted = messages.array().length; // number of messages deleted

          // Logging the number of messages deleted on both the channel and console.
          message.channel.sendMessage("La commande a réussie. :white_check_mark:\n**```diff\n- Nombre de messages effacés : " + messagesDeleted + " messages\n\n(S'il reste encore des messages, veuillez entrer la commande une nouvelle\nfois ou contacter Colonel#0614)\n```**");

          const modlog = client.channels.find('name', 'mod-log');
          if (!modlog) return message.reply('Je ne trouve pas de channel mod-log.');
          
          const embed = new RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .setDescription(`**Action:** Clear\n**Modérateur:** <@${message.author.id}>\n**Nombre de messages supprimés :** ${messagesDeleted}\n**Salon:** <#${message.channel.id}>`)
          return client.channels.get(modlog.id).send({embed});
        })
        .catch(err => {
          console.log('Error while doing Bulk Delete');
          console.log(err);
          message.channel.sendMessage("**```diff\n- Erreur dans le script :\n" + err + "\n```**")
        });
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bulk'], //Autres façons d'appeler la commande
    permLevel: 0
};
  
  exports.help = { //Si l'utilisateur tape  ;help <Commande>
    name: 'clear',
    description: 'Supprime tous les messages du salon textuel.',
    usage: 'clear'
};