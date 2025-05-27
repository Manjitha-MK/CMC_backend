import express from "express";
import { createProduct, deleteProduct, getProduct, getProductById, searchProducts, updateProduct } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProduct);
productRouter.get("/search/:query",searchProducts)
productRouter.get("/:productId",getProductById)
productRouter.delete("/:productId",deleteProduct);
productRouter.put("/:productId",updateProduct);


export default productRouter;