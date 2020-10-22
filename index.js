const path = require('path')
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
client.karaoke = require("./karaoke.json")
const config = require('./config.json')
const command = require('./command')
const { join } = require('path')
const ownerID = require('./config.json')
const version = require('./config.json')

client.on('guildCreate', guild =>{
    const channelId = '763453820897984542';
    const channel = client.channels.cache.get(channelId); //This Gets That Channel
    const sowner = guild.owner.user; //This Gets The Guild Owner
    if(!channel) return; //If the channel is invalid it returns
    const embed = new Discord.MessageEmbed()
        .setTitle('I Joined A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`I'm In ${client.guilds.cache.size} Guilds Now!`);
        channel.send(embed);
});

client.on('ready', async () => {
    console.log('The client is ready!')
    
    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = (dir) => {
      const files = fs.readdirSync(path.join(__dirname, dir))
      for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file))
        if (stat.isDirectory()) {
          readCommands(path.join(dir, file))
        } else if (file !== baseFile) {
          const option = require(path.join(__dirname, dir, file))
          commandBase(client, option)
        }
      }
    }
  
    readCommands('commands')
  })
  
    command(client, ['status'], (message) => {
        if(message.author.id == ownerID){  
                const content = message.content.replace('!status', '')
                message.channel.send('Status Is Changed By The King 👑')
                    client.user.setPresence({
                        activity: {
                            name: content,
                            type: 3,
                        }
            });
        } else {
            message.channel.send('Are You Dumm? You Have No Perms and Humor😂')
        }
       
        });

//Normal Login
client.login(config.token)
// heroku 
//client.login(process.env.DJS_TOKEN)
