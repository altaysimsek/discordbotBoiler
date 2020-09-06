// Importing thats we we need.
const fs = require('fs')
const Discord = require('discord.js')

// Our configs
const { token, prefix } = require('./config')

// Creating a objecct from Discord Class.
const client = new Discord.Client()
// Creating a command collection.
client.commands = new Discord.Collection()

// Reading and setting every file in commands folder.

const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command)
}

// It exports a json file which readed commands
fs.writeFile(
  './commands/myHelpList.json',
  JSON.stringify(client.commands),
  function (err) {
    if (err) throw err
    console.log('Help Listesi oluşturuldu.')
  }
)

// Our bot is starting here ->
client.once('ready', () => {
  console.log('✅ - Sadboi Bot is Alive ')
})

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  if (!client.commands.has(command)) return

  try {
    client.commands.get(command).execute(message, args)
  } catch (error) {
    console.error(error)
    message.reply(
      'Bu kod bulunamadı veya kod çalışırken bir hata meydana geldi.'
    )
  }
})

client.login(token)
