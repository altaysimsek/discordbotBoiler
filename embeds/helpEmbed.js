const Discord = require('discord.js')

const commandList = require('../commands/myHelpList.json')
const embedFields = []
for (const command of commandList) {
  embedFields.push({ name: `✨ - ${command.name} | ${command.description} `, value: `${command.howTo}` })
}

module.exports = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Kullanılabilecek tüm kodlar')
  .setAuthor(
    'sadboiBot',
    'https://cdn.discordapp.com/icons/728353251266789406/710849873270fc913eea465043b1d7d8.webp?size=256'
  )
  .setDescription(
    'Burada kullanılabilecek kodları ve nasıl kullanıldığını öğrenebilirsiniz.'
  )
  .setThumbnail(
    'https://cdn.discordapp.com/emojis/682166181746049034.gif?v=1'
  )
  .addFields(
    embedFields
  )
  .addField('\u200B', '\u200B')
  .setTimestamp()
  .setFooter(
    'sadboiBot sundu',
    'https://cdn.discordapp.com/icons/728353251266789406/710849873270fc913eea465043b1d7d8.webp?size=256'
  )
