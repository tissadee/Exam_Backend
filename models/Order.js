const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Order = sequelize.define('Order', {
    Order_ID: {
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
    Order_Type: {
        type: DataTypes.ENUM('Buy', 'Sell'),
        allowNull: false,
    },
    Cryptocurrency_Type: {
        type: DataTypes.ENUM('BTC', 'ETH', 'XRP', 'DOGE'),
        allowNull: false,
    },
    FiatCurrency_Type: {
        type: DataTypes.ENUM('THB', 'USD'),
        allowNull: false,
    },
    Amount: {
        type: DataTypes.DECIMAL(20, 8),
        allowNull: false,
    },
    Price: {
        type: DataTypes.DECIMAL(20, 8),
        allowNull: false,
    },
    Order_Date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    Status: {
        type: DataTypes.ENUM('Open', 'Closed', 'Cancelled'),
        defaultValue: 'Open',
    },
});

User.hasMany(Order, { foreignKey: 'User_ID' });
Order.belongsTo(User, { foreignKey: 'User_ID' });

module.exports = Order;