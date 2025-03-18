import { Sequelize } from "sequelize";

const db = new Sequelize('task2_db', 'root', '1234', {
    host: '35.238.144.225',
    dialect: 'mysql',
    port: 3306,
    logging: false,  // Nonaktifkan logging query SQL
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export default db;

