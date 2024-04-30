const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Replies with server info!'),
  async execute(interaction) {
    await interaction.reply(`This is server is ${interaction.guild.name} and it has ${interaction.guild.memberCount} members!`);
  },
};