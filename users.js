const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Define routes for user-related functionalities
router.post('/', usersController.createUser);

module.exports = router;
