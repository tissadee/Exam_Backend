const Order = require('../models/Order');

exports.getOrder = async(req, res) => {
    try {
        const order = await Order.findByPk(req.params.id, {
            include: [{ model: User }, { model: Transaction }],
        });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createOrder = async(req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};