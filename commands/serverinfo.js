const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Breda RP")
    .setDescription("Breda is een RP game")
    .setColor("#3e81ed")
    .addFields(
        {name: "Maker van de bot", value: "Mootje"},
        {name: "Naam server", value: "Breda"},
        {name: "Totaal Members", value: message.guild.memberCount}
    )
    .addField("Bot naam", client.user.username)
    .setThumbnail("https://www.lavueltaholanda.com/uploads/_1040x585_crop_center-center_75_none/01-overzicht-Breda-met-Grote-Kerk-centraal-copyright-www.visitbreda.nl.jpg");


    return message.channel.send(botEmbed);
}


module.exports.help = {
    name: "serverinfo"
}