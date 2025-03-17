import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME || "task2_db",   
  process.env.DB_USER || "root",       
  process.env.DB_PASSWORD || "1234",   
  {
    host: process.env.DB_HOST || "127.0.0.1",   
    dialect: "mysql",    
    port: process.env.DB_PORT || 3306, 
    logging: false, 
  }
);

export default db;
