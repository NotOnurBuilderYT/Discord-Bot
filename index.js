const path = require('path')
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
client.karaoke = require("./karaoke.json")
const config = require('./config.json')
const command = require('./command')
const { join } = require('path')
const ownerID = "616453460883275796"
const version = "1.0"



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

    command(client, ['cc', 'clearchannel'], message => {
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.messages.fetch().then(results => {
                message.channel.bulkDelete(100)
            })
        }
    }
    

    )
    command(client, ['status'], (message) => {
        if(message.author.id === ownerID){  
                const content = message.content.replace('!status', '')
                message.channel.send('Status Is Changed By The King 👑')
                    client.user.setPresence({
                        activity: {
                            name: content,
                            type: 3,
                        }
            });
        }
        else{
            message.channel.send('Are You Dumm? You Have No Perms and Humor😂')
        }
        });
    
        command(client, ['karaoke'], (message) => {
            if(message.author.id === ownerID){  
                    message.channel.send("🎤Let's Get This Karaoke Started!🎤")
                    message.channel.send("Everyone That Wants To Sing Type !join")
                    var isjoin = "yes"
            }
            else{
                message.channel.send('Are You Dumm? You Have No Perms To Start The Karaoke😂')
            }
            });
        command(client, ['join'], (message) => {
            message.channel.send(`**__${message.author.username}__** joined!`)
            message.channel.send(`If You Want To Vote Type **!vote <1-10>**`)
            client.karaoke[message.author.id] = {
                name: message.author.username
            }
            fs.writeFile ("./karaoke.json", JSON.stringify (client.karaoke, null, 4), err => {
                if(err)throw err;
                message.channel.send("User ID Has been saved to ./karaoke.json")
                let _peopleinkaraoke = client.karaoke[message.author.id].name
                message.channel.send("People that are in " + _peopleinkaraoke);
            });
        })
    



//Normal Login
//client.login(config.token)
// heroku 
client.login(process.env.DJS_TOKEN)
