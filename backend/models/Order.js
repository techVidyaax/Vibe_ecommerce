// models/Order.js
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  total: { type: Number, required: true },
  purchasedAt: { type: Date, default: Date.now },
  items: [
    {
      name: String,
      price: Number,
      qty: Number
    }
  ]
});

export default mongoose.model("Order", OrderSchema);
