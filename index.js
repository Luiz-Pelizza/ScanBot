const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTMzMzg4Mzk4MzIyOTEzMzEy.Yegzrw.MrDfDIAfCd-bhHFeGI9e7zj3Aio"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "oi"){
        message.reply("Olá Mundo!")
    }
})

client.login(process.env.TOKEN)