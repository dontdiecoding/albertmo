import { Discord, Slash } from "discordx";
import { ChatInputCommandInteraction, Interaction } from "discord.js";

@Discord()
export class Hello {
    @Slash({
        name: "hello",
        description: "Say hello!",
    })
    async hello(interaction: ChatInputCommandInteraction) {
        await interaction.reply("Hello!");
    }
}