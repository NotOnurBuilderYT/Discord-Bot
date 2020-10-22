const { Discord, MessageEmbed } = require('discord.js')
const { version } = require('../config.json')
module.exports = {
  commands: 'version',
  expectedArgs: '`<num1> <num2>`',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 0,
  maxArgs: 0,
  cooldown: 3,
  callback: (message, arguments, text) => {
    const embed = new MessageEmbed()
      .setTitle(`Current Version Is ${version}`)
      .setColor('RANDOM')
    message.channel.send({ embed: embed })
  },
  permissions: '',
  requiredRoles: [],
}
