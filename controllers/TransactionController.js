const Transaction = require('../models/Transaction');

exports.getTransaction = async(req, res) => {
    try {
        const transaction = await Transaction.findByPk(req.params.id, {
            include: [{ model: Order }, { model: Wallet }],
        });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTransaction = async(req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};