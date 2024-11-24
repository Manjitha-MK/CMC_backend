import Product from "../models/products.js";

export function getProducts(req, res) {
  Product.find()
    .then((productList) => {
      res.json({
        list: productList,
      });
    })
    .catch(() => {
      res.json({
        message: "Products not found",
      });
    });
}

export function createProduct(req, res) {
  console.log(req.user);

  if (req.user == null) {
    res.json({
      message: "You are not logged in",
    });
    return;
  }

  if (req.user.type != "admin") {
    res.json({
      message: "You are not an admin",
    });
    return;
  }

  const product = new Product(req.body);

  product
    .save()
    .then(() => {
      res.json({
        message: "Product created",
      });
    })
    .catch(() => {
      res.json({
        message: "Product not created",
      });
    });
}

export function getProductByName(req, res) {
  const name = req.params.name;

  Product.find({ name: name })
    .then((productList) => {
      res.json({
        list: productList,
      });
    })
    .catch(() => {
      res.json({
        message: "Error",
      });
    });
}

export function deleteProduct(req, res) {
  const name = req.params.name;

  Product.deleteOne({ name: name })
    .then(() => {
      res.json({
        message: "Deleted Product " + name,
      });
    })
    .catch(() => {
      res.json({
        message: "Product not deletd",
      });
    });
}
