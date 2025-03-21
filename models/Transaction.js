const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./Order');
const Wallet = require('./Wallet');

const Transaction = sequelize.define('Transaction', {
    Transaction_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Order_ID: {
        type: DataTypes.INTEGER,
        references: {
            model: Order,
            key: 'Order_ID',
        },
    },
    SenderWallet_ID: {
        type: DataTypes.INTEGER,
        references: {
            model: Wallet,
            key: 'Wallet_ID',
        },
    },
    ReceiverWallet_ID: {
        type: DataTypes.INTEGER,
        references: {
            model: Wallet,
            key: 'Wallet_ID',
        },
    },
    Amount: {
        type: DataTypes.DECIMAL(20, 8),
        allowNull: false,
    },
    Transaction_Type: {
        type: DataTypes.ENUM('Buy', 'Sell', 'Transfer'),
        allowNull: false,
    },
    Transaction_Date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    Status: {
        type: DataTypes.ENUM('Completed', 'Pending', 'Failed'),
        defaultValue: 'Pending',
    },
});

Order.hasMany(Transaction, { foreignKey: 'Order_ID' });
Transaction.belongsTo(Order, { foreignKey: 'Order_ID' });

Wallet.hasMany(Transaction, { foreignKey: 'SenderWallet_ID' });
Transaction.belongsTo(Wallet, { foreignKey: 'SenderWallet_ID' });

Wallet.hasMany(Transaction, { foreignKey: 'ReceiverWallet_ID' });
Transaction.belongsTo(Wallet, { foreignKey: 'ReceiverWallet_ID' });

module.exports = Transaction;