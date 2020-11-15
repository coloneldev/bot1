const chalk = require('chalk');
const activities_list = [
  "la radio", 
  "Wejdene",
  "un Podcast", 
  "Eh ChUi PoSeR dAnS lE cLuB, nOrMaL"
  ]; // creates an arraylist containing phrases you want your bot to switch through.

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(chalk.bgRed.white('Je suis là'));
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    client.user.setPresence({
      game: {
          name: activities_list[index],
          type: "Listening",
          url: "https://google.com/"
      }
 });    
}, 3000); // Runs this every 10 seconds.
};