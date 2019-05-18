const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
	client.user.setUsername("daniil30012003");
	client.user.setAvatar("https://cdn.discordapp.com/avatars/224298948897144835/022324de2d8401b3450ef43f23fa6d2d.png?size=2048");
	client.user.setStatus("online");
	client.user.setGame("DON'T @ ME");
	console.log("H");
});
 
client.on("message", (message) => {
	if (message.author.bot) return;
	if (message.content.includes(message.mentions.client)) {
		message.channel.reply("FUCJ OFF"); 
		message.delete(3000);
	}
});
 
client.login(process.env.BOT_TOKEN);
