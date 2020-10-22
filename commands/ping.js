const { Discord, MessageEmbed } = require('discord.js')
module.exports = {
  commands: 'ping',
  callback: (message, arguments, text, client) => {
    message.reply('3.2.1...').then((resultsMessage) => {
      const ping = resultsMessage.createdTimestamp - message.createdTimestamp
      const embed = new MessageEmbed()
        .setTitle(`Bot lantency: ${ping}, API Latency: ${client.ws.ping}`)
        .setColor('RANDOM')
        .setFooter('🤩 https://discord.gg/ATdDWJd 🤩')
      message.channel.send({ embed: embed })
    })
  },
}
