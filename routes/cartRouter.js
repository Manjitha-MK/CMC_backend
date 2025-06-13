import express from "express";
import Cart from "../models/Cart.js";
// import auth from '../middleware/auth.js';
import { authenticate } from "../middware/auth.js";

const cartRouter = express.Router();

// GET /api/cart → Get logged-in user's cart
cartRouter.get("/", authenticate, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate("items.productId");
  res.json(cart || { userId: req.user.id, items: [] });
});

// POST /api/cart → Add/update cart item
cartRouter.post("/", authenticate, async (req, res) => {
  const { productId, quantity } = req.body;

  let cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    cart = new Cart({ userId: req.user.id, items: [] });
  }

  const index = cart.items.findIndex(item => item.productId.toString() === productId);

  if (index > -1) {
    cart.items[index].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  await cart.save();
  res.json(cart);
});

export default cartRouter;
