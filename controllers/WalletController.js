const Wallet = require('../models/Wallet');

exports.getWallet = async(req, res) => {
    try {
        const wallet = await Wallet.findByPk(req.params.id, {
            include: [{ model: User }],
        });
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createWallet = async(req, res) => {
    try {
        const wallet = await Wallet.create(req.body);
        res.status(201).json(wallet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};