import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// Get cart
export const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("product");

    const items = cartItems.map((item) => ({
      _id: item._id,
      productId: item.product._id,
      name: item.product.name,
      price: item.product.price,
      qty: item.qty
    }));

    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add to cart
export const addToCart = async (req, res) => {
  const { productId, qty } = req.body;
  try {
    const existing = await Cart.findOne({ product: productId });
    if (existing) {
      existing.qty += qty;
      await existing.save();
      return res.json(existing);
    }

    const cartItem = new Cart({ product: productId, qty });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update cart quantity
export const updateCartQty = async (req, res) => {
  const { productId, qty } = req.body;
  try {
    if (qty <= 0) await Cart.findOneAndDelete({ product: productId });
    else await Cart.findOneAndUpdate({ product: productId }, { qty }, { new: true, upsert: true });

    const cartItems = await Cart.find().populate("product");
    const items = cartItems.map((item) => ({
      _id: item._id,
      productId: item.product._id,
      name: item.product.name,
      price: item.product.price,
      qty: item.qty
    }));
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Remove from cart
export const removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
