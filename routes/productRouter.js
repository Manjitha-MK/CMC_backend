import express from "express";
import { createProduct, deleteProduct, getProduct, UpdateProduct } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProduct);
productRouter.delete("/:productId",deleteProduct);
productRouter.put("/:productId",UpdateProduct);

export default productRouter;