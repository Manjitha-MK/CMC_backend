import express from 'express'
import { getProducts, createProduct, getProductByName, deleteProduct } from '../controller/productController.js'

//create productroter

const productRouter = express.Router();

productRouter.get("/",getProducts);
productRouter.get("/:name",getProductByName);
productRouter.post("/",createProduct);
productRouter.delete("/:name",deleteProduct);


export default productRouter;