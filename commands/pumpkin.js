module.exports = {
    commands: ['halloween', 'pumpkin'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      if(message.member.nickname === null) {
        message.member.setNickname(`🎃${message.author.username}🎃`)
        message.channel.send(`Your Nick Name Is Now **🎃${message.author.username}🎃**`)
      }
      
    },
    permissions: '',
    requiredRoles: [],
  }