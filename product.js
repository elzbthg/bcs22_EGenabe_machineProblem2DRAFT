//ITCS227 Source Code Template for AT AY 2022-2023
/*

		Program: E-commerce API
		Programmer: Maria Elizabeth Genabe
		Section: AN22
		Start Date: July 16, 2023
		End Date: July 17, 2023

*/

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  isActive: { type: Boolean, default: true },
  createdOn: { type: Date, default: Date.now },
  userOrders: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    orderId: String
  }]
});

module.exports = mongoose.model('Product', productSchema);
