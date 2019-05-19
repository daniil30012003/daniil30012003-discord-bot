--[[ START ]]--
local discordia = require('discordia')
local client = discordia.Client()
--[[ MODULES ]]--
local config = require('./config.lua')
local restrict = require('./restrictions.lua')

--[[ CLIENT ]]--
client:on('ready', function()
	client.user:setStatus(config.botstatus)
	print('Logged in as '..client.user.username)
end)

client:on('messageCreate', function(message)
	if message.author.bot then return else
	if message.author.id == restrict.bannedUser then
		message.channel:send('**You are banned from using this bot.**')
	elseif message.guild.id == restrict.bannedGuild then
		message.channel:send('**Guild **`'..message.guild.name..'`** is banned from using this bot.**')
	else
		if not config.reqperm then 
			if message.content == config.prefix then 
				message.channel:send('**This bot requires **'..config.reqperm..'** permission to work for this server.**') 
			elseif message.content == config.prefix..'b' then
				message.channel:send('b')
			end
		end
	end
end)

client:run(process.env.BOT_TOKEN)
--[[ END ]]--
