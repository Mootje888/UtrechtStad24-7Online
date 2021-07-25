const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var member = message.guild.member(message.mentions.users.first() || clientInformation.users.cache.get(args[0])) ||
    client.users.cache.find(user => user.username.tolowerCase() == args.join(" ").tolowerCase()) ||
    client.users.cache.find(user => user.tag.tolowerCase() == args.join (" ").tolowerCase());

    if(!member) member = message.member;

    var embed = new discord.MessageEmbed()
    .setTitle(`Avatar ${member.user.username}`)
    .setColor("#ff0000")
    .setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096}));

    message.channel.send(embed);
}

module.exports.help = {
    name: "avatar",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
    aliases: []
}