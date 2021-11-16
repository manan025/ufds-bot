const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ufds')
        .setDescription('Brings ufds.cc to Discord'),
	async execute(interaction) {
		await interaction.deferReply();
        const Row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Getting Started',
							value: 'one',
						},
						{
							label: 'STL',
							value: 'two',
						},
                        {
							label: 'Greedy',
							value: 'three',
						},
                        {
							label: 'Binary Search',
							value: 'four',
						},
                        {
							label: 'Introduction to DP',
							value: 'five',
						},
                        {
							label: 'Classic DP Problems',
							value: 'six',
						},
                        {
							label: 'Basic Graph Theory',
							value: 'seven',
						},
                        {
							label: 'More Classic DP Problems',
							value: 'eight',
						},
                        {
							label: 'Advanced Data Structures',
							value: 'nine',
						},
            {
							label: 'Mock INOI 6',
							value: 'ten',
						},


					]),
			);
        const Embed = new MessageEmbed()
            .setColor('#ed7c31')
            .setTitle('UFDS (Junior)')
            .setDescription('**Choose the desired topic**')
            .setURL("https://training.ufds.cc/stages/1-Junior")
            .addFields(
                { name: '1', value: `Getting Started [(link)](https://training.ufds.cc/stages/1-Junior/0-Getting-Started)`, inline: false },
                { name: '2', value: `STL [(link)](https://training.ufds.cc/stages/1-Junior/1-STL)`, inline: false },
                { name: '3', value: `Greedy [(link)](https://training.ufds.cc/stages/1-Junior/2-Greedy)`, inline: false },
                { name: '4', value: `Binary Search [(link)](https://training.ufds.cc/stages/1-Junior/3-Binary-Search)`, inline: false },
                { name: '5', value: `Introduction to DP [(link)](https://training.ufds.cc/stages/1-Junior/4-Introduction-to-Dynamic-Programming)`, inline: false },
                { name: '6', value: `Classic DP Problems [(link)](https://training.ufds.cc/stages/1-Junior/5-Classic-DP-Problems)`, inline: false },
                { name: '7', value: `Basic Graph Theory [(link)](https://training.ufds.cc/stages/1-Junior/6-Basic-Graph-Theory)`, inline: false },
                { name: '8', value: `More Classic DP Problems [(link)](https://training.ufds.cc/stages/1-Junior/7-More-Classic-DP-Problems)`, inline: false },
                { name: '9', value: `Advanced Data Structures [(link)](https://training.ufds.cc/stages/1-Junior/8-Advanced-Data-Structures/)`, inline: false },
                { name: '10', value: `Mock INOI 6 [(link)](https://training.ufds.cc/stages/2-Intermediate/1-Mock-INOI-6/1-Overview/)`, inline: false },
            )

		await interaction.editReply({ embeds: [Embed], components: [Row] });
               
        
	},
};
