import express from "express";
import { getCart, addToCart, updateCartQty, removeFromCart } from "../controllers/cartController.js";

const router = express.Router();

router.get("/", getCart);
router.post("/", addToCart);
router.put("/", updateCartQty);
router.delete("/:id", removeFromCart);

export default router;
