import { Discord, On, type ArgsOf } from "discordx";
import { PermissionsBitField, EmbedBuilder } from "discord.js";

@Discord()

export class Welcome {
    @On({ event: "guildMemberAdd" })
    async welcome([member] : ArgsOf<"guildMemberAdd">, defaultPermissions: PermissionsBitField) {

        const embed = new EmbedBuilder()
            .setColor('Blue')
            .setDescription(`Welcome to Hobbyist Hangout, <@${member.user.id}>`)
            .setImage(member.user.avatarURL())
            .setFooter({text: `You are the ${member.guild.memberCount}th member!`})

        const welcomeChannel = member.guild.channels.cache.find(ch => ch.name === 'door');

        if (welcomeChannel?.isTextBased()) {
            await welcomeChannel.send({ embeds: [embed] });
        }
    }
}