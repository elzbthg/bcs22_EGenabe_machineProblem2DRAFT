const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  orderedProduct: [{
    products: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      productName: String,
      quantity: Number
    }]
  }],
  totalAmount: Number,
  purchasedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
