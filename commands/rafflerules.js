const { Discord, MessageEmbed } = require('discord.js')
module.exports = {
  commands: ['rafflerules'],
  expectedArgs: '',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 0,
  maxArgs: 0,
  callback: (message, arguments, text) => {
    const num1 = +arguments[0]
    const embed = new MessageEmbed()
      .addFields({
        name: 'Current Raffle:',
        value: '1 Life Saver',
        inline: true,
      })
      .setTitle(`**Raffle Rules**`)
      .setColor('RANDOM')
      .setThumbnail('https://cdn.discordapp.com/emojis/573151706641203210.png')
    message.channel.send({ embed: embed })
  },
  permissions: 'ADMINISTRATOR',
  requiredRoles: [],
}
