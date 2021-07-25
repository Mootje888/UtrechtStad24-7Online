// Main dingen
const discord = require("discord.js");
const botConfig = require("./botconfig.json");


const fs = require("fs");


const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <= 0) {
        console.log('Kon geen files vinden');
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);


    })

})

bot.login(botConfig.token);
 
bot.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Mensen die commando's uitvoeren", { type: "WATCHING" });
 
});
 
 
bot.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];


    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot,message, arguments);

});

   // Rank Burger als iemand joint

   bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('844948731626258432');

    if(!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('856510455652679710');

    if(!channel) return;

    channel.send(`Welkom in de server ${member}! Heb een fijne tijd!!`);

   });