import { EmbedBuilder } from "discord.js";

const SUCCESS_EMOJI = ':white_check_mark:'
const ERROR_EMOJI = ':x:'

export function renderSuccess(msg: string): EmbedBuilder { 
  return new EmbedBuilder()
    .setColor('Green')
    .setDescription(`${SUCCESS_EMOJI} ${msg}`)
    .setTimestamp(new Date())
}

export function renderError(msg: string): EmbedBuilder {
  return new EmbedBuilder()
    .setColor('Red')
    .setDescription(`${ERROR_EMOJI} ${msg}`)
    .setTimestamp(new Date())
}
