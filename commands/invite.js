module.exports = {
    commands: ['invite', 'bot'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      message.channel.send('https://discord.com/api/oauth2/authorize?client_id=723973080422023200&permissions=8&scope=bot')
      message.channel.send('**Useful Fact:** Make Sure To Join Our Discord Server! https://discord.gg/ATdDWJd')
    },
    permissions: '',
    requiredRoles: [],
  }