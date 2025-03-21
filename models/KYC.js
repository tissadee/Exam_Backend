const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const KYC = sequelize.define('KYC', {
    KYC_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    User_ID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'User_ID',
        },
    },
    Document_Type: {
        type: DataTypes.ENUM('National ID card', 'Passport'),
        allowNull: false,
    },
    Document_Number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Status: {
        type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
        defaultValue: 'Pending',
    },
    Submitted_At: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    Verified_At: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});

User.hasOne(KYC, { foreignKey: 'User_ID' });
KYC.belongsTo(User, { foreignKey: 'User_ID' });

module.exports = KYC;