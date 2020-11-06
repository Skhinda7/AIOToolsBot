const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'Nzc0MDQ3ODA5MDU3ODQ5MzQ2.X6SGMg.a42buXwS12LVVsB5sKO6WefJhrc';

const PREFIX = '$';

bot.on('message', (msg) => {
   if (msg.content === '!test'){
    msg.reply(`Hello ${msg.author}!`);
   }
});

bot.login(token);

bot.on('ready',() =>{
    console.log('Your first bot is online!')});   