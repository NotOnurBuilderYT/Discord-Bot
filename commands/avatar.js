const { Discord, MessageEmbed } = require("discord.js");
module.exports = {
    commands: ['avatar', 'lookup'],
    expectedArgs: '`<user>`',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 1,
    cooldown: 1,
    callback: (message, arguments, text) => {
      let User = message.mentions.members.first() || message.guild.members.cache.get(arguments[1])
if(User){
      const embed = new MessageEmbed()
      .setTitle(`${User.user.tag}'s Avatar`)
      .setThumbnail(User.user.displayAvatarURL({dynamic: true}))
      .addField(`Username:`, `${User.user.username}`, true)
      .addField(`ID:`, `${User.user.id}`, true)
      .setColor('RANDOM')
      .setFooter('🤩 https://discord.gg/ATdDWJ 🤩')
      message.channel.send({embed: embed})
} 
if(!User){  
      User = message.author
      const embed = new MessageEmbed()
      .setTitle(`${User.tag}'s Avatar`)
      .setThumbnail(User.displayAvatarURL({dynamic: true}))
      .addField(`Username:`, `${User.username}`, true)
      .addField(`ID:`, `${User.id}`, true)
      .setColor('RANDOM')
      .setFooter('🤩 https://discord.gg/ATdDWJ 🤩')
      message.channel.send({embed: embed})
}
    },
    permissions: '',
    requiredRoles: [],
  }
 