const Payment = require('../models/Payment');

exports.getPayment = async(req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id, {
            include: [{ model: Order }, { model: User }, { model: Transaction }],
        });
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPayment = async(req, res) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};