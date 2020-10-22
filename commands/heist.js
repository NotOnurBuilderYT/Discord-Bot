const { Discord, MessageEmbed } = require('discord.js')
module.exports = {
  commands: ['heist'],
  expectedArgs: '`<@user> <amount> <@role>`',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 2,
  maxArgs: 3,
  cooldown: 15,
  callback: (message, arguments, text) => {
    let User = message.mentions.members.first()
    const donated_amount = arguments[1]
    message.delete()
    let role = message.mentions.roles.first()
    if (!message.mentions.roles.first()) role = message.guild.roles.everyone
    let embed = new MessageEmbed()
      .setTitle(`🎉Heist Starting🎉`)
      .addField('Donated By:', `${User}`, true)
      .addField('Amount:', donated_amount, true)
      .addField('Requirement', role, true)
      .addField('Say Thanks To Him In', `<#739596515214885036>`, true)
      .addField('Countdown:', '60 Seconds')
      .setThumbnail(
        'https://cdn.discordapp.com/attachments/743986651218313307/768283374006697984/Pepe_Cowboy_Discord_Server_Logo_2.png'
      )
      .setColor('85bb65')
    let embedmsg
    message.channel.send(embed).then((msg) => {
      let newembed = msg.embeds[0]
      let i = 11
      const updateMsg = setInterval(() => {
        newembed.fields[4] = {
          name: 'Countdown:',
          value: `${i * 5} Seconds`,
          inline: false,
        }
        msg.edit(newembed)
        i--
      }, 5000)
      setTimeout(() => {
        clearInterval(updateMsg)
        if (i <= 0) {
          console.log(role)
          message.channel.updateOverwrite(role, {
            SEND_MESSAGES: true,
          })
        } else {
          message.channel.send('Error Eccured')
        }
      }, 61000)
      setTimeout(() => {
        message.channel.updateOverwrite(role, {
          SEND_MESSAGES: false,
        })
      }, 141000)
    })

    message.channel.send(`<@&765652733704405022>`)
  },
  permissions: '',
  requiredRoles: ['Heist Manager'],
}
