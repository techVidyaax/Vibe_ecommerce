import axios from "axios";

const API_URL = "http://localhost:5000/api/cart";

export interface CartItem {
  _id: string;       // Cart record ID
  productId: string;
  name: string;
  price: number;
  qty: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// Get cart
export const getCart = async (): Promise<Cart> => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching cart:", err);
    return { items: [], total: 0 };
  }
};

// Add to cart
export const addToCart = async (productId: string, qty = 1) => {
  try {
    const res = await axios.post(API_URL, { productId, qty });
    return res.data;
  } catch (err) {
    console.error("Error adding to cart:", err);
  }
};

// Update cart quantity
export const updateCartQty = async (productId: string, qty: number) => {
  try {
    const res = await axios.put(API_URL, { productId, qty });
    return res.data;
  } catch (err) {
    console.error("Error updating cart qty:", err);
  }
};

// Remove from cart
export const removeFromCart = async (cartId: string) => {
  try {
    const res = await axios.delete(`${API_URL}/${cartId}`);
    return res.data;
  } catch (err) {
    console.error("Error removing from cart:", err);
  }
};



// Checkout function
export const checkoutCart = async (cartItems: CartItem[], name: string, email: string) => {
  try {
    const res = await axios.post("http://localhost:5000/api/checkout", {
      cartItems,
      name,
      email,
    });
    return res.data;
  } catch (err) {
    console.error("Error during checkout:", err);
    throw err;
  }
};
