const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Bot Up?'),
	async execute(interaction) {
		await interaction.reply('🏓 Pong!');
	},
};
