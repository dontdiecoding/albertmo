import { Discord, On, type ArgsOf } from "discordx";
import { PermissionsBitField, EmbedBuilder } from "discord.js";
import WelcomeUserType from "../utils/user";

@Discord()

export class Welcome {
    @On({ event: "guildMemberAdd" })
    async welcome([member] : ArgsOf<"guildMemberAdd">, defaultPermissions: PermissionsBitField) {

        const user: WelcomeUserType = {
            id: BigInt(member.user.id),
            avatarUrl: `${member.user.avatarURL()}`,
        }

        const embed = new EmbedBuilder()
            .setColor('Blue')
            .setDescription(`Welcome to Hobbyist Hangout, <@${user.id}>`)
            .setThumbnail(user.avatarUrl)

        const welcomeChannel = member.guild.channels.cache.find(ch => ch.name === 'door');

        if (welcomeChannel?.isTextBased()) {
            await welcomeChannel.send({ embeds: [embed] });
        }
    }
}