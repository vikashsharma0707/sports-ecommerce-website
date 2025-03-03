const express = require("express");
const route = express.Router();

const adminController = require("../Controllers/adminController");
const useController = require("../Controllers/userController")

route.post("/usercheck",adminController.adminDataCheck);
route.get("/admindisplay",adminController.adminProductDisplay)
route.get("/adminUpdateDisplay",adminController.adminUpdatedisplay)
route.post("/adminDataDelete",adminController.adminDatadelete)
route.post("/adminDataSearch",adminController.adminDataSearch)
route.post("/adminEdit",adminController.adminEditDisplay)
route.post("/adminEditSave",adminController.adminEditDatasave)
route.get("/datasearch",adminController.adminSearch)
// route.get("/usercount",useController.getTotalUserCount)
// route.get("/usercount",useController.getUserCountByCategory)
route.get("/usercount",useController.getUserCounts)
route.get("/sorted",useController.getSortedProducts)



module.exports = route;