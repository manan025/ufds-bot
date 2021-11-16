const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('howtoask')
        .setDescription('How To Ask?'),
	async execute(interaction) {
		await interaction.deferReply();
        const Embed1 = new MessageEmbed()
            .setColor('#ed7c31')
            .setTitle('What should I do when I come across a query, and want to ask for debug/general help?')
            .addFields(
                { name: '1', value: 'Google it to see if there are any online resources on it.', inline: false },
                { name: '2', value: 'See the editorial of the problem (if you\'re stuck on a problem)', inline: false },
                { name: '3', value: 'If you think there\'s some bug despite the correct logical implementation, don\'t give up easily. Try debugging your code again and again.', inline: false },
                { name: '4', value: 'If none of the above points seem to work out, then you should proceed further.', inline: false },
            )
        const Embed2 = new MessageEmbed()
            .setColor('#ed7c31')
            .setTitle('How should I structure my query, so that someone bothers to answer it?')
            .addFields(
                { name: '1', value: 'The gist of the problem, what is it and what it requires to be done.', inline: false },
                { name: '2', value: 'Your thought process + What you tried to implement.', inline: false },
                { name: '3', value: 'If you have ANY idea about where things could\'ve potentially gone wrong, elaborate on it. Makes your and our lives easier.', inline: false },
                { name: '4', value: 'Paste your code, in some pip.fi or pastebin link. Please don\'t paste long codes directly into the chat, ruins the chances of your doubt getting resolved.', inline: false },
            )
		await interaction.editReply({ embeds: [Embed1,Embed2] });
	},
};
