/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve all products list.
 *     description: Retrieve all list of products.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: uuid
 *                         description: The product ID.
 *                         example: uuid
 *                       brand:
 *                         type: string
 *                         description: The product's brand.
 *                         example: Cannondale
 *                       model:
 *                         type: string
 *                         description: The product's model.
 *                         example: SL3
 *                       price:
 *                         type: integer
 *                         description: The product's price.
 *                         example: 500
 *   post:
 *     summary: Create a new product
 *     description: Retrieve all list of products.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The product ID.
 *                         example: 1
 *                       brand:
 *                         type: string
 *                         description: The product's brand.
 *                         example: Cannondale
 *                       model:
 *                         type: string
 *                         description: The product's model.
 *                         example: SL3
 *                       price:
 *                         type: integer
 *                         description: The product's price.
 *                         example: 100
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The product ID.
 *           example: 1
 *         brand:
 *           type: string
 *           description: The product's name.
 *           example: Cannondale
 *         model:
 *           type: string
 *           description: The product's model.
 *           example: SL3
 *         price:
 *           type: integer
 *           description: The product's price.
 *           example: 500
 */
const express = require('express');

const router = express.Router()
const productsController = require('../controllers/products')

router.get('/products', productsController.getProducts)
router.get('/products/:id', productsController.getProduct)
router.post('/products', productsController.postProduct)

module.exports = router;