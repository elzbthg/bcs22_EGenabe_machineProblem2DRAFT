//ITCS227 Source Code Template for AT AY 2022-2023
/*

		Program: E-commerce API
		Programmer: Maria Elizabeth Genabe
		Section: AN22
		Start Date: July 16, 2023
		End Date: July 16, 2023

*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:thisshitisbananas@sandbox.tndvpbw.mongodb.net/final_project_appdev?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Import routes
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

// Use routes
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

// Start the Express.js App
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
