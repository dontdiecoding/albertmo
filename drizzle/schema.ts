import { pgTable, pgEnum, varchar, bigint, integer } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

//the drizzle-generated code

export const keyStatus = pgEnum("key_status", [
  "expired",
  "invalid",
  "valid",
  "default",
]);
export const keyType = pgEnum("key_type", [
  "stream_xchacha20",
  "secretstream",
  "secretbox",
  "kdf",
  "generichash",
  "shorthash",
  "auth",
  "hmacsha256",
  "hmacsha512",
  "aead-det",
  "aead-ietf",
]);
export const factorType = pgEnum("factor_type", ["webauthn", "totp"]);
export const factorStatus = pgEnum("factor_status", ["verified", "unverified"]);
export const aalLevel = pgEnum("aal_level", ["aal3", "aal2", "aal1"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", [
  "plain",
  "s256",
]);

// user table

export const members = pgTable("members", {
  id: bigint("id", { mode: "bigint" }).primaryKey(),
  username: varchar("username", { length: 255 }),
  exp: integer("exp"),
  level: integer("level"),
});

