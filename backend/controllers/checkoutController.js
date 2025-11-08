// controllers/checkoutController.js
import Order from "../models/Order.js"; // make sure you have this model
import Cart from "../models/Cart.js";

export const checkoutCart = async (req, res) => {
  const { cartItems, name, email } = req.body;

  if (!name || !email || !cartItems?.length) {
    return res.status(400).json({ message: "Missing info or empty cart" });
  }

  try {
    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Save order
    const order = new Order({
      name,
      email,
      total,
      purchasedAt: new Date(),
      items: cartItems.map(i => ({
        name: i.name,
        price: i.price,
        qty: i.qty
      })),
    });

    await order.save();

    // Clear cart
    await Cart.deleteMany({});

    res.json({ message: "Order successful", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Checkout failed" });
  }
};
