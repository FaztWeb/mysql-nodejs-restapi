import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;

// database environment variables
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "password";
export const DB_DATABASE = process.env.DB_DATABASE || "test";
export const DB_PORT = process.env.DB_PORT || 3306;
