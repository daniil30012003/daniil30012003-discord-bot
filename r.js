const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
	client.user.setStatus("online")
	client.user.setPresence({
        	game: {
			name: 'DON\'T @ ME',
			type: 0
		}
	});
	console.log("H!");
});
 
client.on("message", (message) => {
	if (message.isMentioned(client.user)) {
		message.reply('FUCJ OFF').then(message => {
			message.delete(3000)
		})
	}
});
 
client.login(process.env.BOT_TOKEN);
