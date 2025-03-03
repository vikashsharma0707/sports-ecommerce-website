// const express = require("express");
// const app = express();
// const mongoose =require("mongoose");
// const cors = require("cors");
// const bodyparser = require('body-parser');
// const adminRoute = require("./Routes/adminRoute")
// require("dotenv").config();

// const PORT=process.env.PORT || 8080
// app.use(cors());

// // Body-parser middleware
// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())

// app.use("/adminuser",adminRoute);

// mongoose.connect(process.env.DBCON).then(()=>{
//     console.log("DB Connected!!!");
// })

// app.listen(PORT,()=>{
//     console.log(`server is running on ${PORT}`)
// })


const express = require("express");
const app= express();
const mongoose= require("mongoose");
const cors= require("cors");
const bodyparser = require('body-parser')
const adminRoute= require("./Routes/adminRoute")
const productRoute = require("./Routes/productRoute")
const paymentRoute = require("./Routes/payment");
const userOrderRoute = require("./Routes/userOrderRoute")

require("dotenv").config();
const PORT=process.env.PORT || 8080

app.use(cors());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/adminuser", adminRoute);
app.use("/product",productRoute)

 app.use("/userorder",userOrderRoute)
app.use("/api/payment/",paymentRoute);


app.get("/", (req, res) => {
    res.send("Server is running");
});


mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connected!!!");
})


app.listen(PORT, ()=>{
    console.log(`server run on ${PORT}`)
});