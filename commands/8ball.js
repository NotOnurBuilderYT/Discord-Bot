const { Discord, MessageEmbed } = require('discord.js')
const { prefix } = require('../config.json')
module.exports = {
  commands: ['8ball'],
  expectedArgs: '`<question>`',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 1,
  maxArgs: 999,
  cooldown: 3,
  callback: (message, arguments, text) => {
    let question = message.content.slice(prefix.length + 6)
    if (!question)
      return message.channel.send(`You did not specify your question!`)
    else {
      let responses = [
        'Yes',
        'No',
        'Definetly',
        'Absoloutely',
        'Not in a million years',
        'Please try again',
        'Yes indeed',
        'No, i dont think so',
        'Donald Trump: No',
        'Your Mom: Go Do Dishes',
        'Your Self: Am I retarded?',
        'Your Step Sister: Where Is My Pink?',
        'Stripper: If I say yes will you pay me?',
        "Your Dad: *Doesn't Exist",
        'Onur: Nah',
        'Step Ladder: Probly',
        'No U',
        'Cowboy Bot: Why DO I HAVE TO ANSWER TO THIS RETARD',
        'Sheep: Baaaaa',
        'You: Yes',
      ]
      let response = responses[Math.floor(Math.random() * responses.length - 1)]
      let Embed = new MessageEmbed()
        .setTitle(`${response}`)
        .setDescription(`Your question: ${question}`)
        .setColor(`RANDOM`)
      message.channel.send(Embed)
    }
  },
  permissions: '',
  requiredRoles: [],
}
