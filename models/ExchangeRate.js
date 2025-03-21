const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ExchangeRate = sequelize.define('ExchangeRate', {
    ExchangeRate_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Cryptocurrency_Type: {
        type: DataTypes.ENUM('BTC', 'ETH', 'XRP', 'DOGE'),
        allowNull: false,
    },
    FiatCurrency_Type: {
        type: DataTypes.ENUM('THB', 'USD'),
        allowNull: false,
    },
    Rate: {
        type: DataTypes.DECIMAL(20, 8),
        allowNull: false,
    },
    Last_Updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = ExchangeRate;