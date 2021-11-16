const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const token  = process.env.token;
const { selectreply } = require('./select.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS],
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Bot Up!');
});

client.on('interactionCreate', async interaction => {
  if(interaction.guildId != process.env.guild)
  {
    return interaction.reply({ content: 'Unauthorized Guild', ephemeral: true });
  }
	if(interaction.isSelectMenu()){
		selectreply(interaction);
	}

	if(interaction.isCommand()){
		const command = client.commands.get(interaction.commandName);
		if (!command) return;

		try {
      await command.execute(interaction);
		} catch (error) {
			console.error(error);
			return interaction.editReply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
	
});
const express = require('express')
const app = express();
const port = 3000;
const host = "0.0.0.0"
app.get('/', (req, res) => {
  res.send('Bot Up!')
})
app.listen(port, host, () => {
  console.log('Website Up!')
})
client.login(token);
