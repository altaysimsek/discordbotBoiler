// Importing thats what we need .
const { prefix } = require('../config.json')

// helpEmbed Import
const helpEmbed = require('../embeds/helpEmbed')

module.exports = {
  name: 'help',
  description: 'Yardım menüsü gösterir.',
  howTo: `${prefix}help yazarak kullanabilirsiniz.`,
  execute (message, args) {
    message.channel.send(helpEmbed)
  }
}
