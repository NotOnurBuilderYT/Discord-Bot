const { Discord, MessageEmbed } = require('discord.js')
module.exports = {
  commands: ['giveaway'],
  expectedArgs: '`<@user> <amount>`',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 2,
  maxArgs: 999,
  cooldown: 15,
  callback: (message, arguments, text) => {
    let User = message.mentions.members.first()
    const donated_amount = arguments[1]
    message.delete()
    const embed = new MessageEmbed()
      .setTitle(`🎉Giveaway Time🎉`)
      .addField('Donated By:', `${User}`, true)
      .addField('Amount:', `${donated_amount}`, true)
      .addField('Say Thanks To Him In', `<#739596515214885036>`, '!', true)
      .setColor('85bb65')
    message.channel.send({ embed: embed })
    message.channel.send(`<@&739636908266881085>`)
  },
  permissions: '',
  requiredRoles: ['Giveaway Manager'],
}
