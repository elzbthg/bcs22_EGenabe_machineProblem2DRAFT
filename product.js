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
