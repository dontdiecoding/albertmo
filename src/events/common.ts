import { User } from "discord.js";
import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";
import { db } from "../utils/db";
import { members } from "$schema";

@Discord()
export class AddUser {
  @On()
  async messageCreate([message]: ArgsOf<"messageCreate">, client: Client) {
    const User = {
      username: `${message.author.username}`,
      id: BigInt(message.author.id),
    };
    
    await db.insert(members)
      .values({ id: User.id, username: User.username, exp: 0, level: 0 })
      .onConflictDoUpdate({
        target: members.id,
        set: User,
      });
  }
}

