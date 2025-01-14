import express from "express";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProduct);
productRouter.delete("/:productId",deleteProduct);
productRouter.put("/:productId",updateProduct);

export default productRouter;