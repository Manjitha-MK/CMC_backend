import Product from "../models/products.js";
import { isAdmin } from "./userController.js";

export function createProduct(req, res) {
  if (!isAdmin(req)) {
    res.json({
      message: "Please login as administrator to add products",
    });
  }

  const product = new Product(newProductData);

  Product.save()
    .then(() => {
      res.json({
        message: "Product created",
      });
    })
    .catch(() => {
      res.json({
        message: error,
      });
    });
}


export function getProduct(req,res){
    Product.find({}).then((products) =>{
        res.json({
            products
        })
    })
}