const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'YOURTOKENHERE';

const PREFIX = '$';

bot.on('message', (msg) => {
   if (msg.content === '$test'){
    msg.reply(`Hello ${msg.author}!`);
   }
}); 
// This command was created as a test to make sure the bot works correctly and doesn't send the same message multiple times.
bot.on('message', (msg) => {
    if (msg.content === '$embed') {
        const embed = new MessageEmbed()
        // Set the title
            .setTitle('This is a test')
        // Set the color (THIS IS A HEX CODE)   
           .setColor(0xff0000)
        // Set the description
            .setDescription('This is a test to see if the bot makes an embed message.');
        // This will send the message
        msg.channel.send(embed);
    }
}));

        `);
    }
});
// This can be edited in anyway so that you have your own message on the Discord Bot
bot.login(token);

bot.on('ready',() =>{
    console.log('Your first bot is online!')});   //This message can be changed to anything you choose. It will show in the terminal when the bot is enabled.
