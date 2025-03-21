const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const WalletController = require('../controllers/WalletController');
const OrderController = require('../controllers/OrderController');
const TransactionController = require('../controllers/TransactionController');
const PaymentController = require('../controllers/PaymentController');
const KYCController = require('../controllers/KYCController');
const ExchangeRateController = require('../controllers/ExchangeRateController');

// User routes
router.get('/users/:id', UserController.getUser);
router.post('/users', UserController.createUser);

// Wallet routes
router.get('/wallets/:id', WalletController.getWallet);
router.post('/wallets', WalletController.createWallet);

// Order routes
router.get('/orders/:id', OrderController.getOrder);
router.post('/orders', OrderController.createOrder);

// Transaction routes
router.get('/transactions/:id', TransactionController.getTransaction);
router.post('/transactions', TransactionController.createTransaction);

// Payment routes
router.get('/payments/:id', PaymentController.getPayment);
router.post('/payments', PaymentController.createPayment);

// KYC routes
router.get('/kyc/:id', KYCController.getKYC);
router.post('/kyc', KYCController.createKYC);

// ExchangeRate routes
router.get('/exchange-rates/:id', ExchangeRateController.getExchangeRate);
router.post('/exchange-rates', ExchangeRateController.createExchangeRate);

module.exports = router;