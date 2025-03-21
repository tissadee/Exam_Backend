const KYC = require('../models/KYC');

exports.getKYC = async(req, res) => {
    try {
        const kyc = await KYC.findByPk(req.params.id, {
            include: [{ model: User }],
        });
        res.status(200).json(kyc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createKYC = async(req, res) => {
    try {
        const kyc = await KYC.create(req.body);
        res.status(201).json(kyc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};