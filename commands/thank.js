const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const datajson = require('../ratelimiter.json')
const Database = require("@replit/database")
const db = new Database()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thank')
        .setDescription('Appreciate someone\'s effort')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),
	async execute(interaction) {
        await interaction.deferReply();
        const user = interaction.options.getUser('user');
        if(!user.bot){
            if (interaction.user.id === user.id)
            {
                const Embed = new MessageEmbed()
                    .setColor('#ed7c31')
                    .setTitle(`<:bruh:882186214831165480>`)
                    .setImage("https://i.ibb.co/318p1NK/image.png")
                await interaction.editReply({ embeds: [Embed] });
            }
            else
            {
                const sender = interaction.user.id
                const reciever =  user.id
                const ratelimitid = sender + reciever
                const starttime = new Date().getTime();
                for(i in datajson)
                {
                    if(datajson[i].user == ratelimitid)
                    {
                        if (starttime - datajson[i].time  <= 600000)
                        {
                            const Embed = new MessageEmbed()
                                .setColor('#ed7c31')
                                .setDescription(`<@${interaction.user.id}>, You have already thanked <@${user.id}>!`)
                            await interaction.editReply({ embeds: [Embed] });
                            return;
                        }
                    }
                }
                const NewData = { user: ratelimitid, time: starttime };
                datajson.push(NewData);
                fs.writeFile("ratelimiter.json", JSON.stringify(datajson) , async(err) => {
                    if (err) throw err; 
                    await db.set(user.id, Number(await db.get(user.id)+Number(1)))
                    const Embed = new MessageEmbed()
                        .setColor('#ed7c31')
                        .setDescription(`<@${interaction.user.id}> thanked <@${user.id}>!`)
                    await interaction.editReply({ embeds: [Embed] });
                });
                
                
            }
        }
        else 
        {
            const Embed = new MessageEmbed()
                .setColor('#ed7c31')
                .setDescription(`<@${user.id}> is a bot. Bots are really helpful but you can't thank them at the moment.`)
            await interaction.editReply({ embeds: [Embed] });
        }
        
        
	},
};
