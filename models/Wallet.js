const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Wallet = sequelize.define('Wallet', {
    Wallet_ID: {
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
    Currency_Type: {
        type: DataTypes.ENUM('BTC', 'ETH', 'XRP', 'DOGE', 'THB', 'USD'),
        allowNull: false,
    },
    Balance: {
        type: DataTypes.DECIMAL(20, 8),
        defaultValue: 0,
    },
    Created_At: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

User.hasMany(Wallet, { foreignKey: 'User_ID' });
Wallet.belongsTo(User, { foreignKey: 'User_ID' });

module.exports = Wallet;