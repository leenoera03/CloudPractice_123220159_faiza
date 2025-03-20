import { Sequelize } from "sequelize";

const db = new Sequelize('task2_db', 'root','1234', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
} );

export default db;

