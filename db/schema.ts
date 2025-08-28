import { pgTable, serial, text, integer, timestamp, varchar, boolean, decimal } from "drizzle-orm/pg-core";

// CLIENTS AND CONTACT
export const clients = pgTable("Clients", {
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

export const clientAddresses = pgTable("ClientAddresses", {
    address_id: serial("address_id").primaryKey(),
    client_id: integer("client_id").references(() => clients.client_id, { onDelete: "cascade"}).notNull(),
    street_address: varchar("street_address", { length: 255 }),
    city: varchar("city", { length: 100 }),
    state: varchar("state", { length: 100 }),
    zip_code: varchar("zip_code", { length: 10 }),
    parking_details: text("parking_details"),
    notes: text("notes"),
});

// SERVICES AND PRICING
export const services = pgTable("Services", {
    service_id: serial("service_id").primaryKey(),
    name: varchar("name", { length: 100}).notNull(),
    description: text("description"),
    is_active: boolean("is_active").default(true),
});

export const servicesPricing = pgTable("servicesPricing", {
    pricing_id: serial("pricing_id").primaryKey(),
    service_id: integer("service_id").references(() => services.service_id, { onDelete: "cascade"}).notNull(),
    min_sqft: integer("min_sqft"),
    max_sqft: integer("max_sqft"),
    price: decimal("price", { precision: 10, scale: 2}).notNull(),    
});

export const serviceExtras = pgTable("serviceExtras", {
    extra_id: serial("extra_id").primaryKey(),
    name: varchar("name", { length: 100}).notNull(),
    description: text("description"),
    price: decimal("price", { precision: 10, scale: 2}).notNull(),
    is_active: boolean("is_active").default(true),
});

export const discountRules = pgTable("discountRules", {
    discount_id: serial("discount_id").primaryKey(),
    service_id: integer("service_id").references(() => services.service_id, { onDelete: "cascade"}).notNull(),
    frequency: varchar("frequency", { length: 50}).notNull(),
    percentage: decimal("percentage", { precision: 5, scale: 2}).notNull(), 
});

export const fees = pgTable("fees", {
    fee_id: serial("fee_id").primaryKey(),
    name: varchar("name", { length: 50}).notNull(),
    description: text("description"),
    amount: decimal("amount", { precision: 10, scale: 2}).notNull(),
    is_active: boolean("is_active").default(true),
});

export const estimates = pgTable("estimates", {
    estimate_id: serial("estimate_id").primaryKey(),
    client_id: integer("client_id").references(() => clients.client_id, { onDelete: "cascade"}).notNull(),
    address_id: integer("address_id").references(() => clientAddresses.address_id, { onDelete: "cascade"}).notNull(),
    property_type: varchar("property_type", { length: 50 }),
    house_size: integer("house_size"), // en sqft
    levels: integer("levels"),
    rooms: integer("rooms"),
    bathrooms: integer("bathrooms"),
    special_instructions: text("special_instructions"),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const estimateServices = pgTable("estimateServices", {
    estimate_id: integer("estimate_id").references(() => estimates.estimate_id, { onDelete: "cascade"}).notNull(),
    service_id: integer("service_id").references(() => services.service_id).notNull(),
});

export const estimateExtras = pgTable("estimateExtras", {
    estimate_id: integer("estimate_id").references(() => estimates.estimate_id, { onDelete: "cascade"}).notNull(),
    fee_id: integer("fee_id").references(() => fees.fee_id).notNull(),
});

export const appointments = pgTable("appointments", {
    appointment_id: serial("appointment_id").primaryKey(),
    estimate_id: integer("estimate_id").references(() => estimates.estimate_id, { onDelete: "cascade"}).notNull(),
    date_choice1: timestamp("date_choice1").notNull(),
    date_choice2: timestamp("date_choice2"),
    scheduled_date: timestamp("scheduled_date"),
    time_preference: varchar("time_preference", { length: 20}),
    status: varchar("status", { length: 20}).notNull(),
    tracing_token: varchar("tracing_token", { length: 255}).notNull(),
    tracing_expires_at: timestamp("tracing_expires_at").notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
});

// TEAM AND RECRUITMENT
export const employees = pgTable("employees", {
    employee_id: serial("employee_id").primaryKey(),
    first_name: varchar("first_name", { length: 50}).notNull(),
    last_name: varchar("last_name", { length: 50}).notNull(),
    preferred_name: varchar("preferred_name", { length: 50}),
    phone: varchar("phone", { length: 15}).notNull(),
    email: varchar("email", { length: 100}).notNull(),
    address: varchar("address", { length: 255}).unique(),
    city: varchar("city", { length: 100}),
    state: varchar("state", { length: 100}),
    zip_code: varchar("zip_code", { length: 10}),
    hire_date: timestamp("hire_date").notNull(),
    status: varchar("status", { length: 20}).notNull().default("applicant"),
});

export const employeeApplication = pgTable("employeeApplication", {
    application_id: serial("application_id").primaryKey(),
    employee_id: integer("employee_id").references(() => employees.employee_id, { onDelete: "cascade"}).notNull(),
    driver_license: boolean("driver_license").default(false),
    reliable_transport: boolean("reliable_transport").default(false),
    background_check: boolean("background_check").default(false),
    car_insurance: boolean("car_insurance").default(false),
    experience_years: integer("experience_years"),
    residential_experience: boolean("residential_experience").default(false),
    commercial_experience: boolean("commercial_experience").default(false),
    start_availability: timestamp("start_availability").notNull(),
    work_type: varchar("work_type", { length: 20}).notNull(),
    extra_info: text("extra_info"),
    status: varchar("status", { length: 20}).notNull().default("pending"),
});

export const employeeCities = pgTable("employeeCities", {
    application_id: integer("application_id").references(() => employeeApplication.application_id, { onDelete: "cascade"}).notNull(),
    city_name: varchar("city_name", { length: 100}),
    // todo: check primary key
});

export const employeeWorkHistory = pgTable("employeeWorkHistory", {
    history_id: serial("history_id").primaryKey(),
    application_id: integer("application_id").references(() => employeeApplication.application_id, { onDelete: "cascade"}).notNull(),
    job_title: varchar("job_title", { length: 100}),
    company: varchar("company", { length: 150}),
    years: integer("years"),
});

// MARKETING
export const testimonial = pgTable("testimonial", {
    testimonial_id: serial("testimonial_id").primaryKey(),
    client_id: integer("client_id").references(() => clients.client_id, { onDelete: "cascade"}).notNull(),
    content: text("content").notNull(),
    rating: integer("rating").notNull(), // add check constraint
    created_at: timestamp("created_at").notNull().defaultNow(),
});

export const blogPost = pgTable("blogPost", {
    post_id: serial("post_id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    content: text("content").notNull(),
    author_id: integer("author_id").references(() => employees.employee_id).notNull(), // maybe i just can use varchar type
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const subscriber = pgTable("subscriber", {
    subscriber_id: serial("subscriber_id").primaryKey(),
    email: varchar("email", { length: 100}).notNull().unique(),
    created_at: timestamp("created_at").notNull().defaultNow(),
});

export const giftCertificate = pgTable("giftCertificate", {
    certificate_id: serial("certificate_id").primaryKey(),
    code: varchar("code", { length: 20}).notNull().unique(),
    amount: decimal("amount", { precision: 10, scale: 2}).notNull(),
    client_id: integer("client_id").references(() => clients.client_id, { onDelete: "cascade"}).notNull(),
    expiration_date: timestamp("expiration_date").notNull(),
    status: varchar("status", { length: 20}).notNull().default("active"), // active, redeemed, expired
});
