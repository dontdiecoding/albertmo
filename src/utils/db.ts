import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from 'pg';

const connection = new Client(process.env.DATABASE_URL!);

await connection.connect();

export const db = drizzle(connection);