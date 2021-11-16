const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('howtodebug')
        .setDescription('How To Debug?'),
	async execute(interaction) {
		await interaction.deferReply();
        const Embed = new MessageEmbed()
            .setColor('#ed7c31')
            .setTitle('How should I debug my code, if I believe my solution is close to AC?')
            .addFields(
                { name: '1', value: 'Google the unknown errors, if any. You might find something.', inline: false },
                { name: '2', value: 'On a small testcase, try dry running your code, keeping a log of variable changes as the code runs.', inline: false },
                { name: '3', value: 'Try printing various variable names to the error stream.', inline: false },
                { name: '4', value: 'Use a debugging template, or something like Prettyprint to print out the content of different STL containers, in a neat way.', inline: false },
                { name: '5', value: `Use the [Rubber duck approach](https://en.wikipedia.org/wiki/Rubber_duck_debugging) to debug your code.`, inline: false },
                { name: '6', value: `You can also use a fully-fledged Debugger to make things simple on your end. (GDB)`, inline: false },
            )
        await interaction.editReply({ embeds: [Embed] });
	},
};
