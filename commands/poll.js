const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('poll')
        .setDescription('Poll')
        	.addStringOption(option => option.setName('title').setDescription('Enter title of poll').setRequired(true))
          .addStringOption(option => option.setName('option1').setDescription('Enter option 1').setRequired(true))
          .addStringOption(option => option.setName('option2').setDescription('Enter option 2').setRequired(true))
          .addStringOption(option => option.setName('option3').setDescription('Enter option 3'))
          .addStringOption(option => option.setName('option4').setDescription('Enter option 4'))
          .addStringOption(option => option.setName('option5').setDescription('Enter option 5')),
	async execute(interaction) {
        await interaction.deferReply();
        if(interaction.user.id == process.env.admin || interaction.user.id == process.env.admin2 || interaction.user.id == process.env.admin3)
        {
          const title = interaction.options.getString('title');
          const option1 = interaction.options.getString('option1');
          const option2 = interaction.options.getString('option2');
          const option3 = interaction.options.getString('option3');
          const option4 = interaction.options.getString('option4');
          const option5 = interaction.options.getString('option5');
          var desc = `:one:  ${option1}\n\n:two:  ${option2}\n\n`
          if(option3)
          {
            desc += `:three:  ${option3}\n\n`
          }
          if(option4)
          {
            desc += `:four:  ${option4}\n\n`
          }
          if(option5)
          {
            desc += `:five:  ${option5}\n\n`
          }
          const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setTitle(title)
                .setDescription(desc)
                .setFooter(`Poll By ${interaction.user.username}#${interaction.user.discriminator}`)
          const message = await interaction.editReply({ embeds: [Embed] , fetchReply: true});
          try {
            await message.react('1️⃣');
			      await message.react('2️⃣');
			      if(option3){await message.react('3️⃣');}
            if(option4){await message.react('4️⃣');}
            if(option5){await message.react('5️⃣');}
		      } catch (error) {
			      console.error('Failed:', error);
		      }
          
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
