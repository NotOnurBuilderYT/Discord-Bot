module.exports = {
  commands: ['guilds', 'servers'],
  permissionError: 'You need admin permissions to run this command',
  minArgs: 0,
  maxArgs: 0,
  cooldown: 100,
  callback: (message, arguments, text, client) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `**${guild.name}** with an id **${guild.id}** has a total of **${guild.memberCount}** members`
      )
    })
  },
  permissions: '',
  requiredRoles: [],
}
