


const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    category:String,
    price:String,
    sportscategory:String,
    brandname:String,
    image:String
})

module.exports = mongoose.model("product",productSchema);