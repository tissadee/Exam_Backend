const User = require('../models/User');
const Wallet = require('../models/Wallet');
const Order = require('../models/Order');
const Transaction = require('../models/Transaction');
const Payment = require('../models/Payment');
const KYC = require('../models/KYC');
const ExchangeRate = require('../models/ExchangeRate');
const sequelize = require('../config/database');

const seed = async() => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced and cleared.');

        // สร้าง User
        const user = await User.create({
            Username: 'john_doe',
            Password: 'password123',
            Email: 'john@example.com',
            Phone_Number: '1234567890',
            Status: 'Active',
        });
        console.log('User created:', user.toJSON());

        // สร้าง Wallet
        const wallet1 = await Wallet.create({
            User_ID: user.User_ID,
            Currency_Type: 'BTC',
            Balance: 1.5,
        });
        const wallet2 = await Wallet.create({
            User_ID: user.User_ID,
            Currency_Type: 'THB',
            Balance: 100000,
        });
        console.log('Wallets created:', [wallet1.toJSON(), wallet2.toJSON()]);

        // สร้าง Order
        const order = await Order.create({
            User_ID: user.User_ID,
            Order_Type: 'Buy',
            Cryptocurrency_Type: 'BTC',
            FiatCurrency_Type: 'THB',
            Amount: 0.5,
            Price: 1000000,
            Status: 'Open',
        });
        console.log('Order created:', order.toJSON());

        // สร้าง Transaction
        const transaction = await Transaction.create({
            Order_ID: order.Order_ID,
            SenderWallet_ID: wallet2.Wallet_ID, // ส่งจาก Wallet THB
            ReceiverWallet_ID: wallet1.Wallet_ID, // รับเข้า Wallet BTC
            Amount: 0.5,
            Transaction_Type: 'Buy',
            Status: 'Completed',
        });
        console.log('Transaction created:', transaction.toJSON());

        // สร้าง Payment
        const payment = await Payment.create({
            Order_ID: order.Order_ID,
            User_ID: user.User_ID,
            Transaction_ID: transaction.Transaction_ID,
            Payment_Method: 'Bank Transfer',
            Amount: 500000,
            Currency_Type: 'THB',
            Status: 'Completed',
        });
        console.log('Payment created:', payment.toJSON());

        // สร้าง KYC
        const kyc = await KYC.create({
            User_ID: user.User_ID,
            Document_Type: 'National ID card',
            Document_Number: '1234567890',
            Status: 'Approved',
        });
        console.log('KYC created:', kyc.toJSON());

        // สร้าง ExchangeRate
        const exchangeRate = await ExchangeRate.create({
            Cryptocurrency_Type: 'BTC',
            FiatCurrency_Type: 'THB',
            Rate: 1000000,
        });
        console.log('ExchangeRate created:', exchangeRate.toJSON());

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await sequelize.close(); // ปิดการเชื่อมต่อฐานข้อมูล
    }
};

seed();