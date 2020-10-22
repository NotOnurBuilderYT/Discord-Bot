const { Discord, MessageEmbed } = require('discord.js')
const randomPuppy = require('random-puppy')
module.exports = {
  commands: ['meme'],
  expectedArgs: '',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 0,
  maxArgs: 0,
  cooldown: 3,
  callback: async (message, arguments, text) => {
    const subReddits = ['memes']
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random)

    const memeEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setImage(img)
      .setTitle(`Your meme. From r/${random}`)
      .setURL(`https://reddit.com/r/${random}`)

    message.channel.send(memeEmbed)
  },
  permissions: '',
  requiredRoles: [],
}
