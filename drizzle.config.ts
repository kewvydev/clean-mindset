import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
    schema: "./db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        host: process.env.DB_HOST!,
    }
} satisfies Config;