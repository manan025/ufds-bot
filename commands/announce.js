const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('announce')
        .setDescription('Create an announcement.')
        .addStringOption(option => option.setName('title').setDescription('Enter a Title').setRequired(true))
        .addStringOption(option => option.setName('description').setDescription('Enter a Description').setRequired(true))
    .addStringOption(option =>
			option.setName('ping')
				.setDescription('Announcement for')
				.addChoice('Junior', '<@&867123940701634601>')
				.addChoice('Intermediate', '<@&867124045569064971>')
				.addChoice('Senior', '<@&867123845743116319>')
        .addChoice('All', '<@&867123940701634601> <@&867124045569064971> <@&867123845743116319>')
        .addChoice('Everyone', '@everyone')),
	async execute(interaction) {
        await interaction.deferReply();
        if(interaction.user.id == process.env.admin || interaction.user.id == process.env.admin2 || interaction.user.id == process.env.admin3)
        {
          const title = interaction.options.getString('title');
          const desc = interaction.options.getString('description');
          const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle(title)
                .setDescription(desc)
          const cont = await interaction.options.getString('ping')
          if (cont != null){
            await interaction.editReply({content: cont, embeds: [Embed] });
          }
          await interaction.editReply({embeds: [Embed] });
        }
        else
        {
          const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setDescription(`You are not authorized to use this command. <:feelssadman:901111997586866276>`)
          await interaction.editReply({ embeds: [Embed] });
        }
        
	},
};
