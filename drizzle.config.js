/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./drizzle/*.ts",
    tablesFilter: ["*[!_view]"],
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL,
    },
};