const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Define routes for product-related functionalities
router.get('/', productsController.getAllProducts);

module.exports = router;
