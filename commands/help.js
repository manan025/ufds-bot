const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
    .setDescription('Help'),
async execute(interaction) {
        await interaction.deferReply();
        const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle('🍭 Commands:')
                .setDescription(`**Code can be found on [Github](https://github.com/GrimZZZ-404/UFDSbot)**`)
                .addFields(
                { name: '/help', value: 'Shows this message.', inline: false },
                { name: '/announce', value: '**[Admin]** Creates an Embed.', inline: false },
                { name: '/count', value: 'Check User\'s Thanks Count', inline: false },
                { name: '/howtoask', value: 'FAQs on How to ask?.', inline: false },
                { name: '/howtodebug', value: 'FAQs on How to debug?.', inline: false },
                { name: '/fact', value: 'Facts are taken from touristfacts.', inline: false },
                { name: '/lb', value: 'Shows Leaderboard.', inline: false },
                { name: '/poll', value: '**[Admin]** Creates a poll.', inline: false },
                { name: '/set', value: '**[Admin]** Sets Thanks Count.', inline: false },
                { name: '/thank', value: 'Appreciate someone\'s effort.', inline: false },
                { name: '/ufds', value: 'Brings ufds.cc to Discord.', inline: false },
                { name: '/wiki', value: 'Searches Wikipedia for your query.', inline: false },
                )
            
        await interaction.editReply({ embeds: [Embed] });

        
	},
};
