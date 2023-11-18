import { Discord , Slash, SlashOption } from "discordx";
import { ChatInputCommandInteraction, Interaction, EmbedBuilder } from "discord.js";
import { renderSuccess , renderError } from "../utils/embeds";

@Discord()
export class MakeEmbed {
    @Slash({name: "embed", description: "Make an embed"})
    async embed(interaction: ChatInputCommandInteraction) {
       

    }
}