const { Discord, MessageEmbed } = require('discord.js')
module.exports = {
  commands: ['heist'],
  expectedArgs: '`<@user> <amount> <@role> <thxchannelid> <pingroleid>`',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 3,
  maxArgs: 5,
  cooldown: 60,
  callback: (message, arguments, text, id) => {
    let User = message.mentions.members.first()
    let thxChannel = arguments[3]
    let role = message.mentions.roles.first()
    let pingRoleID = arguments[4]
    const donated_amount = arguments[1]
    console.log(thxChannel)
    if (!message.mentions.roles.first()) role = message.guild.roles.everyone
    let embed = new MessageEmbed()
      .setTitle(`🎉Heist Starting🎉`)
      .addField('Donated By:', `${User}`, true)
      .addField('Amount:', donated_amount, true)
      .addField('Requirement', role, true)
      .addField('Say Thanks To Him In', `<#${thxChannel}>`, true)
      .addField('Countdown:', '60 Seconds', true)
      .setThumbnail(message.guild.iconURL())
      .setColor('85bb65')
      .setFooter('Join https://discord.gg/Yh7Asdr')
    message.channel.send(embed).then((msg) => {
      let newembed = msg.embeds[0]
      let i = 11
      const updateMsg = setInterval(() => {
        newembed.fields[4] = {
          name: 'Countdown:',
          value: `${i * 5} Seconds`,
          inline: true,
        }
        msg.edit(newembed)
        i--
      }, 5000)
      setTimeout(() => {
        clearInterval(updateMsg)
        if (i <= 0) {
          console.log(role)
          let embed = new MessageEmbed()
            .addField(`Unlocked The Channel For`, `<@&${role.id}>`, true)
            .setColor(`2aae2a`)
          message.channel.send(embed)
          message.channel.updateOverwrite(role, {
            SEND_MESSAGES: true,
          })
        }
      }, 61000)
      setTimeout(() => {
        message.channel.updateOverwrite(role, {
          SEND_MESSAGES: false,
        })
        let embed = new MessageEmbed()
          .addField(`Locked The Channel For`, `<@&${role.id}>`, true)
          .setColor(`FF0000`)
        message.channel.send(embed)
      }, 141000)
    })

    message.channel.send(`<@&${pingRoleID}>`)
  },
  permissions: '',
  requiredRoles: ['Heist Manager'],
}
