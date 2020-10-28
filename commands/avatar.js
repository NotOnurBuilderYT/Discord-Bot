const { Discord, MessageEmbed } = require('discord.js')
module.exports = {
  commands: ['avatar', 'lookup'],
  expectedArgs: '`<user>`',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 0,
  maxArgs: 1,
  cooldown: 3,
  callback: (message, arguments, text, user) => {
    let User =
      message.mentions.members.first() ||
      message.guild.members.cache.get(arguments[1])
    if (User) {
      const embed = new MessageEmbed()
        .setTitle(`${User.user.tag}'s Avatar`)
        .setThumbnail(User.user.displayAvatarURL({ dynamic: true }))
        .addField(`Username:`, `${User.user.username}`, true)

        .addField(
          'Joined Discord:',
          `${User.member.createdAt.toLocaleDateString()}`,
          false
        )
        .addField(
          'Joined Server:',
          `${User.joinedAt.toLocalDateString()}`,
          true
        )
        .addField(`ID:`, `${User.user.id}`, false)
        .setColor('RANDOM')
      message.channel.send({ embed: embed })
    }
    if (!User) {
      User = message.author
      const embed = new MessageEmbed()
        .setTitle(`${User.tag}'s Avatar`)
        .setThumbnail(User.displayAvatarURL({ dynamic: true }))
        .addField(`Username:`, `${User.username}`, true)
        .addField(
          'Joined Discord:',
          `${message.author.createdAt.toLocaleDateString()}`,
          false
        )
        .addField(
          'Joined Server:',
          `${message.member.joinedAt.toLocaleDateString()}`,
          true
        )
        .addField(`ID:`, `${User.id}`, false)
        .setColor('RANDOM')
      message.channel.send({ embed: embed })
    }
  },
  permissions: '',
  requiredRoles: [],
}
