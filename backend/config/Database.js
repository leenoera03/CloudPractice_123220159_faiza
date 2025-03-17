import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load file .env sebelum digunakan
dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false, // Matikan log untuk debugging lebih mudah
  }
);

console.log("Database Config:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "HIDDEN" : "NOT SET");
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_DIALECT:", process.env.DB_DIALECT);


export default db;
