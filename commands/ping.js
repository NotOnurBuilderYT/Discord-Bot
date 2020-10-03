module.exports = {
    commands: ['ping', 'latency', 'test'],
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('Pong!')
    },
    permissions: '',
    requiredRoles: [],
  }