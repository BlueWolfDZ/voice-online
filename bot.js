const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready',async () => {//join voice

  client.channels.find(ch => ch.id === "560214718476845056" && ch.type === 'voice').join();

});

client.login(process.env.BOT_TOKEN)
