const Discord = require('discord.js');
const client = new Discord.Client();
// other shit idk
const ownerID = "224298948897144835";
const prefix = 'd>';

// commands lol
client.on('ready', () => {
	client.user.setStatus('online')
	client.user.setActivity('discord.js', { type: 'WATCHING' })
	client.user.setPresence({ activity: { name: 'reading daniil\'s personal msgs B)' },  status: 'online' });
	console.log('H');
});
 
client.on('message', (message) => {
	if (message.author.bot) return;
	if (message.content.indexOf(prefix) !== 0) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === 'h') {
		message.channel.send('h');
	} else
	if (message.isMentioned(client.user)) {
		message.channel.reply('FUCJ OFF'); 
		message.delete(3000);
	} else
	/*
	if (message.author.id !== ownerID) return;
	if (command === 'ban') {
		let member = message.mentions.members.first();
		let reason = args.slice(1).join('\\');
		member.ban(reason);
	} else
	if (command === 'send') {
		let text = args.join('\\');
		message.delete();
		message.channel.send(text);
	}
	*/
});
 
client.login(process.env.BOT_TOKEN);
