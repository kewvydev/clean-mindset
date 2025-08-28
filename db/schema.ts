import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const Clients = pgTable("Clients", {
    client_id: serial("client_id").primaryKey(),
    first_name: varchar("first_name", { length: 50 }).notNull(),
    last_name: varchar("last_name", { length: 50 }).notNull(),
    email: varchar("email", { length: 100 }).notNull(),
    phone: varchar("phone", { length: 15 }).notNull(),
    preferred_contact_method: varchar("preferred_contact_method", { length: 50 }).notNull(),
    alt_phone: varchar("alt_phone", { length: 15 }),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
});