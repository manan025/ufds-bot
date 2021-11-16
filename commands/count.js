const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const Database = require("@replit/database")
const db = new Database()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('count')
        .setDescription('Get user\'s thank count.')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();
        const user = interaction.options.getUser('user');
        const thank = await db.get(user.id)
        const Embed = new MessageEmbed()
            .setColor('#ed7c31')
            .setDescription(`<@${user.id}>'s thank count is ${thank}`)
        await interaction.editReply({ embeds: [Embed] });
	},
};
