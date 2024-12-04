import Product from "../models/products.js";
import { isAdmin } from "./userController.js";

export function createProduct(req, res) {

    if(!isAdmin(req)){
        res.jason({
            message : "Please login as administrator to add products",
        })
    }



  const product = new Product(newProductData);

  Product.save()
    .then(() => {
      res.jason({
        message: "Product created",
      });
    })
    .catch(() => {
      res.jason({
        message: error,
      });
    });
}
