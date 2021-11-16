const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const wiki = require('wikipedia');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wiki')
        .setDescription('Search Wikipedia.')
        .addStringOption(option => option.setName('query').setDescription('Enter your query').setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();
        const query = interaction.options.getString('query');
        try
        {
          const page = await wiki.page(query);
          const summary = await page.summary();
          const Embed = new MessageEmbed()
            .setColor('#ed7c31')
            .setTitle(summary.title)
            .setURL(summary.content_urls.desktop.page)
            .setDescription(summary.extract)
            if(summary.thumbnail)
            {
              Embed.setThumbnail(summary.thumbnail.source)
            }
            else
            {
              Embed.setThumbnail('https://i.ibb.co/sVP0L06/Wikipedia-logo-v2.jpg')
            }
            
          await interaction.editReply({ embeds: [Embed]})
        }
        catch (error) {
	      	console.log(error);
          const Embed = new MessageEmbed()
            .setColor('#ed7c31')
            .setDescription('Wikipedia Error')
          await interaction.editReply({ embeds: [Embed]})
        }
        
        
	},
};
