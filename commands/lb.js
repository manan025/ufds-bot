const Database = require("@replit/database")
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const db = new Database()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lb')
    .setDescription('Leaderboard'),
	async execute(interaction) {
    await interaction.deferReply()
    const dbdata = await db.getAll()   
    var dblist = []
    for ( i in dbdata)   
    {
      const NewData = { user: i, point: dbdata[i] };
      dblist.push(NewData);
    
    }
    dblist.sort((a, b) => {
    return b.point - a.point;
    });
    var desc = ``
    var cnt = 0
    for (i in dblist)
    {
      desc += `<@${dblist[i].user}>:\n ${dblist[i].point}\n`
      cnt++
      if (cnt > 4)
      {
        break;
      }
    }
    const Embed = new MessageEmbed()
        .setColor('#ed7c31')
        .setTitle('Leaderboard:')
        .setDescription(desc)
    await interaction.editReply({ embeds: [Embed] });
	},
};
