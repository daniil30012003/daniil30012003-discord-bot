const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
	client.user.setStatus('online');
	client.user.setPresence({ game: { name: 'DONT @ ME' }, status: 'dnd' });
	console.log('H');
});
 
client.on('message', (message) => {
	if (message.author.bot) return;
	if (message.content.includes(message.mentions.client)) {
		message.channel.reply('FUCJ OFF'); 
		message.delete(3000);
	}
});
 
client.login(process.env.BOT_TOKEN);
