import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load file .env
dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME,   // Nama database
  process.env.DB_USER,   // Username MySQL
  process.env.DB_PASSWORD,  // Password MySQL
  {
    host: process.env.DB_HOST,   // Host MySQL
    dialect: process.env.DB_DIALECT, // Dialect MySQL
    port: process.env.DB_PORT, // Port MySQL
  }
);

export default db;

