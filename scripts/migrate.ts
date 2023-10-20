import chalk from "chalk";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from 'postgres';

const connection = postgres(process.env.DATABASE_URL!, { max: 1 });

const db = drizzle(connection);
await migrate(db, { migrationsFolder: "drizzle" });

console.info(chalk.bold("Migrated"));

connection.end();