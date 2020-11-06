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
    if (msg.content === '$downloads'){
        msg.reply(`Okay here you go!
        **ANB AIO** (http://bit.ly/ANB-AIO-Setup)
        **ANB AIO V2** (http://downloadsv2.aiobot.com/)
        **BNB** (http://bnba.io/download-bnb)
        **Balko (Mac - Zip)** (http://rb.gy/6ya323)
        **Balko (Mac)** (http://rb.gy/zagmsj)
        **Balko (Windows)** (https://rb.gy/stcykc)
        **Balko Cookie Extension** (https://s3.amazonaws.com/balkobot.com/BalkoExtension.zip)
        **CyberAIO** (https://rb.gy/4q2cck)
        **Dashe** (http://rb.gy/iceabf)
        **EveAIO** (https://rb.gy/lmzgya)\n
        **EveCaptcha (Mac)** (https://rb.gy/4mnhky)
        **EveCaptcha (Windows)** (https://rb.gy/enmpff)
        `);
    }
});
// More bot download links can be added. I will update this when I get to formatting this text to embed to make the message look much cleaner.
bot.login(token);

bot.on('ready',() =>{
    console.log('Your first bot is online!')});   //This message can be changed to anything you choose. It will show in the terminal when the bot is enabled.
