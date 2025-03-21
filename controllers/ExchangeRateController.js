const ExchangeRate = require('../models/ExchangeRate');

exports.getExchangeRate = async(req, res) => {
    try {
        const exchangeRate = await ExchangeRate.findByPk(req.params.id);
        res.status(200).json(exchangeRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createExchangeRate = async(req, res) => {
    try {
        const exchangeRate = await ExchangeRate.create(req.body);
        res.status(201).json(exchangeRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};