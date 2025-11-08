import { Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Receipt from "./components/Receipt";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
  <Route path="/receipt" element={<Receipt />} />
    </Routes>
  );
}
