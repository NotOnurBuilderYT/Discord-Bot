const { Discord, MessageEmbed } = require('discord.js')
module.exports = {
  commands: ['halloween', 'pumpkin'],
  expectedArgs: '',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 0,
  maxArgs: 0,
  cooldown: 10,
  callback: (message, arguments, text) => {
    message.member.setNickname(`🎃${message.author.username}🎃`)
    const embed = new MessageEmbed()
      .setTitle(`Your Nick Name Is Now **🎃${message.author.username}🎃**`)
      .setColor('2aae2a')
    message.channel.send({ embed: embed })
  },
  permissions: '',
  requiredRoles: [],
}
