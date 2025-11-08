import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
