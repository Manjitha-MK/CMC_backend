import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const Product = mongoose.model("products", productSchema);

export default Product;
