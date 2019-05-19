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
	local message.author = msgauthor
	local message.content = msgcontent
	local message.channel = msgch
	if msgauthor.bot then return else
	if msgauthor.id == restrict.bannedUser then
		msgch:send('**You are banned from using this bot.**')
	elseif message.guild.id == restrict.bannedGuild then
		msgch:send('**Guild **`'..message.guild.name..'`** is banned from using this bot.**')
	else
		if not config.reqperm then 
			if msgcontent == config.prefix then 
				msgch:send('**This bot requires **'..config.reqperm..'** permission to work for this server.**') 
			elseif msgcontent == config.prefix..'b' then
				msgch:send('b')
			end
		end
	end
end)

client:run(process.env.BOT_TOKEN)
--[[ END ]]--
