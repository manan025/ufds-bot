const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const Database = require("@replit/database")
const db = new Database()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('set')
        .setDescription('Set user\'s thank count.')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
        	.addNumberOption(option => option.setName('count').setDescription('Thank Count').setRequired(true)),
	async execute(interaction) {
        await interaction.deferReply();
        if(interaction.user.id == process.env.admin || interaction.user.id == process.env.admin2 || interaction.user.id == process.env.admin3)
        {
          const user = interaction.options.getUser('user');
          const thank = interaction.options.getNumber('count');
          await db.set(user.id, thank)
          const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setDescription(`<@${user.id}>'s thank count set to ${thank}`)
          await interaction.editReply({ embeds: [Embed] });
        }
        else
        {
          const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setDescription(`You are not authorized to use this command.<:feelssadman:901111997586866276>`)
          await interaction.editReply({ embeds: [Embed] });
        }
        
	},
};
