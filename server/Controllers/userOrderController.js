// // const UserModel= require("../Models/userModel");


// // const customerSave=async(req, res)=>{
// //     const {name, address, city, pincode, mobile, proname, price}=req.body;
// //     await UserModel.create({

// //         name:name,
// //         address:address, 
// //         city: city,
// //         pin:pincode,
// //         mobile: mobile,
// //         product:proname,
// //         price:price
// //     })
// //   res.send("User Created!!!");
// // }

// // module.exports={
// //     customerSave
// // }


// const UserModel= require("../Models/userModel");


// const customerSave=async(req, res)=>{
//     const {name, address, city, pincode, mobile, proname, price}=req.body;
//     console.log(name, address, city, pincode, mobile, proname, price,"lkjhgcxzxcgbhjjkhg lkgjfhgf")
//     await UserModel.create({

//         name:name,
//         address:address, 
//         city: city,
//         pin:pincode,
//         mobile: mobile,
//         product:proname,
//         price:price
//     })
//   res.send(name, address, city, pincode, mobile,proname, price);
  
// }

// module.exports={
//     customerSave
// }

const userModel = require("../Models/userModel");
const UserModel = require("../Models/userModel");

const customerSave = async (req, res) => {
  try {
    const { name, address, city, pincode, mobile, proname, price } = req.body;

   
    console.log(name, address, city, pincode, mobile, proname, price, "Input received");

    
    const newCustomer = await UserModel.create({
      name: name,
      address: address,
      city: city,
      pin: pincode,
      mobile: mobile,
      product: proname,
      price: price,
    });

   
    res.status(201).json({
      success: true,
      message: "Customer saved successfully",
      data: newCustomer,
    });
  } catch (error) {
    console.error("Error saving customer:", error);

   
    res.status(500).json({
      success: false,
      message: "Error saving customer",
      error: error.message,
    });
  }
};


const orderDisplay=async(req,res)=>{
  const display =  await userModel.find()
  res.send(display)
}

module.exports = {
  customerSave,
  orderDisplay
};
