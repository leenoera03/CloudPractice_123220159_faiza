import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

// Perbaikan: Ubah nama tabel dari 'user' menjadi 'users' untuk menghindari konflik
const User = db.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false // Pastikan nama tidak kosong
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Pastikan email unik
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "users",
    freezeTableName: true,
    timestamps: false // Matikan createdAt dan updatedAt otomatis
});

export default User;

// try-catch biar tau klo server macet waktu sync
(async () => {
    try {
        await db.sync();
        console.log("Database synced successfully");
    } catch (error) {
        console.error("Database sync error:", error);
    }
})();
