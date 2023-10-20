import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

@Discord()
export class AddUser {
  @On()
  messageCreate([message]: ArgsOf<"messageCreate">, client: Client): void {
  }
}

