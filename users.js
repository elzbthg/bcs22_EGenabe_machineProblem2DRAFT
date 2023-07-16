//ITCS227 Source Code Template for AT AY 2022-2023
/*

		Program: E-commerce API
		Programmer: Maria Elizabeth Genabe
		Section: AN22
		Start Date: July 16, 2023
		End Date: July 17, 2023

*/

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Define routes for user-related functionalities
router.post('/', usersController.createUser);

module.exports = router;
