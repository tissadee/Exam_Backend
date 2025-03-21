const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./Order');
const User = require('./User');
const Transaction = require('./Transaction');

const Payment = sequelize.define('Payment', {
    Payment_ID: {
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
    User_ID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'User_ID',
        },
    },
    Transaction_ID: {
        type: DataTypes.INTEGER,
        references: {
            model: Transaction,
            key: 'Transaction_ID',
        },
    },
    Payment_Method: {
        type: DataTypes.ENUM('Bank Transfer', 'Credit Card', 'PayPal'),
        allowNull: false,
    },
    Amount: {
        type: DataTypes.DECIMAL(20, 8),
        allowNull: false,
    },
    Currency_Type: {
        type: DataTypes.ENUM('THB', 'USD'),
        allowNull: false,
    },
    Payment_Date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    Status: {
        type: DataTypes.ENUM('Pending', 'Completed', 'Failed'),
        defaultValue: 'Pending',
    },
});

Order.hasMany(Payment, { foreignKey: 'Order_ID' });
Payment.belongsTo(Order, { foreignKey: 'Order_ID' });

User.hasMany(Payment, { foreignKey: 'User_ID' });
Payment.belongsTo(User, { foreignKey: 'User_ID' });

Transaction.hasOne(Payment, { foreignKey: 'Transaction_ID' });
Payment.belongsTo(Transaction, { foreignKey: 'Transaction_ID' });

module.exports = Payment;