const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  quantity: { type: Number, required: true },
  product: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
