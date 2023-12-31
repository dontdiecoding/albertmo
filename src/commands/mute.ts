import { ApplicationCommandOptionType, ChatInputCommandInteraction, GuildMember, PermissionsBitField } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";
import { renderError, renderSuccess } from '../utils/embeds'
import ms from 'ms'

@Discord()
export class Mute {
  @Slash({ name: 'mute', description: 'Mute a user', defaultMemberPermissions: PermissionsBitField.Flags.MuteMembers })
  async mute(
    @SlashOption({
      description: "Target user",
      name: "user",
      required: true,
      type: ApplicationCommandOptionType.User,
    })
    @SlashOption({
      description: 'Time, example: 2 days',
      name: 'time',
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    @SlashOption({
      description: 'Reason',
      type: ApplicationCommandOptionType.String,
      required: false,
      name: 'reason'
    })

    user: GuildMember, time: string, reason: string | undefined, interaction: ChatInputCommandInteraction) {
    const milli = ms(time)
    await user.timeout(milli, reason)
      .then(() => {
        return interaction.reply({
          embeds: [renderSuccess(`\`${user.displayName}\` has been successfully muted.`)],
          ephemeral: true,
        })
      })
      .catch((_) => {
        return interaction.reply({
          embeds: [renderError(`${user.displayName} cannot be muted.`)],
          ephemeral: true,
        })
      })
  }
}
