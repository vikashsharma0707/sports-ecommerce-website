
const express= require("express");
const route= express.Router();
const UserController= require("../Controllers/userOrderController");


route.post("/usersave", UserController.customerSave);
route.get("/orderDisplay",UserController.orderDisplay)


module.exports=route;