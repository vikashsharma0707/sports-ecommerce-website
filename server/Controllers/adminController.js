
const adminModel = require("../Models/adminModel");
const productModel = require("../Models/productModel")

const adminDataCheck = async(req,res)=>{
    const {user,password} = req.body;
    // console.log(user,password)

    const admin = await adminModel.find({user:user});

    if(admin.length<1){
        res.status(404).send({msg:"invalid password"})
    }

    else{
        if(admin[0].password !=password){
            res.status(404).send({msg:"invalid password"})
        }

        else{
            res.status(200).send(admin)
        }
    }
}


const adminProductDisplay = async(req,res)=>{
    const Data = await productModel.find();
    res.send(Data);
}


const adminUpdatedisplay = async(req,res)=>{
    const Data = await productModel.find();
    res.send(Data)

}

const adminDatadelete = async(req,res)=>{
    const myid = req.body.id

    const Data = await productModel.findByIdAndDelete(myid);
    res.send("Data deleted successfully")
}

const adminDataSearch=async(req,res)=>{
    let proname = req.query.adminuser;
    console.log(proname)

   
    const Data = await productModel.find({
        $or: [
          { name: { $regex: proname, $options: 'i' } },
          { category: { $regex: proname, $options: 'i' } },
          { brandname: { $regex: proname, $options: 'i' } }, // Join with '|' for regex OR
      
        ]
      });

      res.send(Data)
    }

    const adminEditDisplay = async(req,res)=>{
        const id = req.body.id
        const Data = await productModel.findById(id)
        res.send(Data)
    }

    // const adminEditDatasave = async(req,res)=>{
    //     const {_id,name,description,category,price,sportscategory,brandname} = req.body;
    //     console.log(_id,name,description,category,price,sportscategory,brandname)

    //     const Data = await adminModel.findByIdAndUpdate(_id,{
    //        name:name,
    //        description:description,
    //        category:category,
    //        price:price,
    //        sportscategory:sportscategory,
    //        brandname:brandname
    //     })

    //     res.send("Data save sucessfully")
    // }

    const adminEditDatasave = async (req, res) => {
        try {
          // Destructure request body
          const { _id, name, description, category, price, sportscategory, brandname,image } = req.body;
      
          // Basic validation
          if (!_id || !name || !description || !category || !price || !sportscategory || !brandname || !image) {
            return res.status(400).json({ error: "All fields are required." });
          }
      
          // Find and update the record
          const updatedData = await  productModel.findByIdAndUpdate(
            _id,
            {
              name:name,
              description:description,
              category:category,
              price:price,
              sportscategory:sportscategory,
              brandname:brandname,
              image:image
            },
             // Return the updated document
          );
      
          // Check if the record was found and updated
          if (!updatedData) {
            return res.status(404).json({ error: "Data not found." });
          }
      
          // Send a success response
          res.status(200).json({ message: "Data updated successfully", data: updatedData });
      
        } catch (error) {
          // Handle unexpected errors
          console.error("Error updating data:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      };




      // const adminSearch = async (req, res) => {
      //   try {
      //     const proname = req.query.adminuser;
      
      //     // Check if search term is provided and not empty
      //     if (!proname || proname.trim() === "") {
      //       return res.status(400).json({ message: "Please provide a valid search term." });
      //     }
      
      //     // Perform the search using case-insensitive regex
      //     const data = await adminModel.find({
      //       $or: [
      //         { name: { $regex: proname, $options: 'i' } },
      //         { category: { $regex: proname, $options: 'i' } },
      //         { brandname: { $regex: proname, $options: 'i' } },
      //       ],
      //     });
      
      //     // Check if data is found and return appropriate response
      //     if (data.length === 0) {
      //       return res.status(404).json({ message: "No matching data found." });
      //     }
      
      //     // Send the found data
      //     res.status(200).json(data);
      //   } catch (error) {
      //     // Handle errors and send a server error response
      //     console.error("Error during search:", error);
      //     res.status(500).json({ message: "An error occurred while processing your request." });
      //   }
      // };
      









    /*const adminEditDatasave = async (req, res) => {
      try {
        // Destructure and trim request body values
        const { _id, name, description, category, price, sportscategory, brandname } = req.body;
    
        // Basic validation for empty fields
        if (!_id || !name || !description || !category || !price || !sportscategory || !brandname) {
          return res.status(400).json({ error: "All fields are required." });
        }
    
        // Additional validation for price (ensure it's a positive number)
        const parsedPrice = parseFloat(price);
        if (isNaN(parsedPrice) || parsedPrice <= 0) {
          return res.status(400).json({ error: "Price must be a positive number." });
        }
    
        // Find the record by ID and update it
        const updatedData = await adminModel.findByIdAndUpdate(
          _id,
          {
            name: name.trim(),
            description: description.trim(),
            category: category.trim(),
            price: parsedPrice,
            sportscategory: sportscategory.trim(),
            brandname: brandname.trim(),
          },
          { new: true, runValidators: true } // Return the updated document and run schema validations
        );
    
        // Check if the record was found and updated
        if (!updatedData) {
          return res.status(404).json({ error: "Data not found." });
        }
    
        // Send a success response with the updated data
        res.status(200).json({ message: "Data updated successfully", data: updatedData });
    
      } catch (error) {
        // Handle unexpected errors
        console.error("Error updating data:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    };*/
    

    const adminSearch = async(req,res)=>{
      let proname = req.query.adminuser;

      const Data = await productModel.find({
        $or: [
          { name: { $regex: proname, $options: 'i' } },
          { category: { $regex: proname, $options: 'i' } },
          { brandname: { $regex: proname, $options: 'i' } }, // Join with '|' for regex OR
      
        ]
      });

      res.send(Data)
    }
      



module.exports={
    adminDataCheck,
    adminProductDisplay,
    adminUpdatedisplay,
    adminDatadelete,
    adminDataSearch,
    adminEditDisplay,
    adminEditDatasave,
    adminSearch
}