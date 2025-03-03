const express = require("express");
const route =  express.Router();

const productController = require("../Controllers/productController");

route.post("/productsave",productController.productSave);
route.post("/productsavedata",productController.productSavedata);
route.get("/productdisplay",productController.productDisplay)
route.post("/productdetail",productController.productDetail)
route.get("/productcategory",productController.productCategory)
route.get("/productsportscategory",productController.productSportsCategory)
route.get("/productsearch",productController.productSearch)
route.post("/shopproduct",productController.productShop)


module.exports = route;