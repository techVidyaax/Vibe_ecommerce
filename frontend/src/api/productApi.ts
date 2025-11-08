import axios from "axios";

// Backend API URL
const API_URL = "http://localhost:5000/api/products";

export interface Product {
  _id: string;
  name: string;
  price: number;
}

// Get all products
export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};
