-- package.lua
return {
	name = "daniil30012003-discord-bot-lua",
	version = "V-0.0.5",
	private = true, -- This prevents us from accidentally publishing this package.
	files = {
		"index.lua",
	}
	dependencies = {
		"luvit/require",
		"luvit/pretty-print",
	}
}
