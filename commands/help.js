const { Discord, MessageEmbed } = require("discord.js");
module.exports = {
    commands: ['help', 'info'],
    expectedArgs: '<num1> <num2>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {
      const num1 = +arguments[0]
      const embed = new MessageEmbed()
      .addFields(
        { name: 'For Help:', value: 'https://discord.gg/ATdDWJr' },
        { name: 'Invite', value: 'Sends Invite Link', inline: true },
        { name: 'Add', value: 'Adds 2 Numbers', inline: true },
        { name: 'Clear', value: 'Deletes Messages', inline: true },
        { name: 'Pumpkin', value: 'Adds 🎃 in name', inline: true },
        { name: 'Help', value: 'Shows This Embed', inline: true },
        { name: 'Ping', value: 'Tells Bot Latency', inline: true },
        { name: 'Avatar', value: 'Info About User', inline: true },
      )
      .setTitle(`**Cowboy Bot Commands**`)
      .setColor('RANDOM')
      .setThumbnail('https://cdn.discordapp.com/attachments/760495241760997399/762805007463874560/Logo_200x200.png')
      .setFooter('🤩https://discord.gg/ATdDWJr🤩')
      .setTimestamp()
      message.channel.send({embed: embed})
    },
    permissions: '',
    requiredRoles: [],
  }