import { useEffect, useState } from "react";
import { getCart, updateCartQty, removeFromCart } from "../api/cartApi";
import type { Cart as CartType } from "../api/cartApi";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css"; // your styles.css

export default function Cart() {
  const [cart, setCart] = useState<CartType>({ items: [], total: 0 });
  const navigate = useNavigate();

  const loadCart = async () => {
    const data = await getCart();
    setCart(data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const increment = async (productId: string, qty: number) => {
    await updateCartQty(productId, qty + 1);
    loadCart();
  };

  const decrement = async (productId: string, qty: number) => {
    if (qty === 1) {
      const item = cart.items.find((i) => i.productId === productId);
      if (item) await removeFromCart(item._id);
    } else {
      await updateCartQty(productId, qty - 1);
    }
    loadCart();
  };

  const goCheckout = () => navigate("/checkout");

  return (
    <div className="container-cart">
      <Link to="/home" className="btn-c1">Back to Home</Link>
      <div className="top-bar">
        <h1>Cart</h1>
      </div>

      {cart.items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
          <p>Add some products to see them here.</p>
        </div>
      ) : (
        <div className="cart-items-wrapper">
          {cart.items.map((item) => (
            <div key={item._id} className="cart-item">
              <h3>{item.name}</h3>
              <p>
                Qty:
                <button className="qty-btn" onClick={() => decrement(item.productId, item.qty)}>-</button>
                {item.qty}
                <button className="qty-btn" onClick={() => increment(item.productId, item.qty)}>+</button>
              </p>
              <p>₹{item.price * item.qty}</p>
              <button className="btn-c2" onClick={() => removeFromCart(item._id).then(loadCart)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      <div className="total">Total: ₹{cart.total}</div>
      <div className="checkbt">
        <button onClick={goCheckout} disabled={cart.items.length === 0}>Checkout</button>
      </div>
    </div>
  );
}
