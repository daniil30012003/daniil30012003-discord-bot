// START //
const Discord = require('discord.js');
const client = new Discord.Client();
// MODULE //
const vars = require('./var.js')
// BOT //
client.on('ready', () => {
	// client.user.setStatus('online')
	// client.user.setPresence({
        // 	game: {
	//		name: 'DON\'T @ ME',
	//		type: 0
	//	}
	// });
	console.log('H!');
});
// COMMAND //
client.on('message', (message) => {
	if (message.isMentioned(client.user)) {
		message.reply("HOW DARE YOU TO PING ME YOU LITTLE MOTHER FUCKER, I WILL FIND YOU AND WRECK YOUR FUCKING STUPID COMPUTER TO PREVENT FURTHER BOT PINGS, YOU'LL REGRET WHAT YOU HAVE DONE SO FAR KIDDO.").then(message => {
			message.delete(3000)
		})
	}
});
// LOGIN //
client.login(process.env.BOT_TOKEN);
// END //
