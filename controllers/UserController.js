const User = require('../models/User');

exports.getUser = async(req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: [{ model: Wallet }],
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createUser = async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};