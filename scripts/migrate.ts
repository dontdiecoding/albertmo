import chalk from "chalk";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Client } from 'pg';

const connection = new Client({connectionString: process.env.DATABASE_URL!});

await connection.connect();

const db = drizzle(connection);

await migrate(db, { migrationsFolder: "drizzle" });

console.info(chalk.bold("Migrated"));

connection.end();