import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import type { Product } from "../api/productApi";
import { addToCart } from "../api/cartApi";
import { Link } from "react-router-dom";
import "../styles/global.css"; // your styles.css

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleAdd = (id: string) => {
    addToCart(id, 1).then(() => alert("Added to cart"));
  };

  if (products.length === 0) {
    return (
      <div className="container-home">
        <h2>No products available</h2>
      </div>
    );
  }

  return (
    <div className="container-home">
      <div className="top-bar">
        <h1>Products</h1>
        <Link to="/cart" className="btn-p1">Go to Cart</Link>
      </div>

      <div className="grid">
        {products.map((p) => (
          <div key={p._id} className="card">
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button className="btn-p2" onClick={() => handleAdd(p._id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
