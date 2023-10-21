import { ChatInputCommandInteraction, GuildMember } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export class Dusto {
  @Slash({ name: 'dusto', description: 'Bans the F-out of dusto'})
  async dusto(interaction: ChatInputCommandInteraction) {
    await interaction.guild?.members.ban('675792043926355980')
  }
}
