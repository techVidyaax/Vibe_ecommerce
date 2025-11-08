import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  qty: { type: Number, default: 1 }
});

export default mongoose.model("Cart", cartSchema);
