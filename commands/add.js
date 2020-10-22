const { Discord, MessageEmbed } = require('discord.js')
module.exports = {
  commands: ['add', 'addition'],
  expectedArgs: '`<num1> <num2>`',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 2,
  maxArgs: 2,
  cooldown: 1,
  callback: (message, arguments, text) => {
    const num1 = +arguments[0]
    const num2 = +arguments[1]
    const embed = new MessageEmbed()
      .setTitle(`**${num1}** plus **${num2}** is **${num1 + num2}**`)
      .setColor('RANDOM')
    message.channel.send({ embed: embed })
  },
  permissions: '',
  requiredRoles: [],
}
