const { Discord, MessageEmbed } = require("discord.js");
module.exports = {
    commands: ['clear', 'bulkdelete'],
    expectedArgs: '`<NumberToDelete>`',
    permissionError: "You Need `Manage_Messages` To Perform This Action",
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        const numToDelete = +arguments[0] 
        message.channel.messages.fetch().then(results => {
            message.channel.bulkDelete(numToDelete)
            const embed = new MessageEmbed()
            .setTitle(`Cleared **${numToDelete}** Messages :white_check_mark: `)
            .setColor('2aae2a') //2aae2a green
            .setFooter('🤩 https://discord.gg/ATdDWJ 🤩')
            message.channel.send({embed: embed})
        })
    },
    permissions: 'MANAGE_MESSAGES',
    requiredRoles: [],
  }


