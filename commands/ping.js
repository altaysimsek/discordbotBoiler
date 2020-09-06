const {prefix} = require("../config.json")
module.exports = {
	name: "ping",
	description: "Ping 'e pong !",
	howTo:`${prefix}ping yazarak kullanabilirsiniz.`,
	execute(message, args) {
		message.channel.send("pong");
	},
};