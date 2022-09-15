const Product = require('../models/product')

exports.getProducts = (_, res) => {
    Product.findAll({ attributes: ['id', 'model', 'brand', 'price'] })
        .then(result => res.status(200).send(result))
        .catch(error => res.status(400).send(error.errors.map(error => error.message)))
}

exports.postProduct = (req, res) => {
    const { brand, model, price } = req.body;
    Product.create({ brand, model, price })
        .then(result => res.status(201).send(result))
        .catch(error => res.status(400).send(error.errors.map(error => error.message)))
}

exports.getProduct = (req, res) => {
    const { id } = req.params;
    Product.findByPk(id, { attributes: ['id', 'model', 'brand', 'price'] })
        .then(result => res.status(201).send(result))
        .catch(error => res.status(400).send(error.errors.map(error => error.message)))
}