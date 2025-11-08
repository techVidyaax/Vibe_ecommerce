import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCart, checkoutCart } from "../api/cartApi";
import type { Cart as CartType } from "../api/cartApi"; // remove CartItem

import "../styles/global.css"; // your styles.css

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cart, setCart] = useState<CartType>({ items: [], total: 0 });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Load cart on component mount
  useEffect(() => {
    const loadCart = async () => {
      const data = await getCart();
      setCart(data);
    };
    loadCart();
  }, []);

  const handleCheckout = async () => {
    if (!name || !email) {
      alert("Please enter name and email");
      return;
    }

    if (cart.items.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setLoading(true);

    try {
      const receipt = await checkoutCart(cart.items, name, email);
      navigate("/receipt", { state: { receipt: receipt.order } });
    } catch (err) {
      console.error(err);
      alert("Checkout failed. Make sure your backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <form
        className="checkout-card"
        onSubmit={(e) => {
          e.preventDefault();
          handleCheckout();
        }}
      >
        <h1>Checkout</h1>

        {cart.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>Total: ₹{cart.total}</p>
        )}

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          className="checkout"
          type="submit"
          disabled={cart.items.length === 0 || loading}
        >
          {loading ? "Processing..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
}
