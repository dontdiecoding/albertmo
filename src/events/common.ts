import { Discord, On, type ArgsOf } from "discordx";
import { db } from "../utils/db";
import { members } from "$schema";

@Discord()
export class AddUser {
  @On()
  async messageCreate([message]: ArgsOf<"messageCreate">) {
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