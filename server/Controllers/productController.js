const productModel = require("../Models/productModel");


// const productSave = async(req,res)=>{
//     const {name,description,category,price, sportscategory,brandname,image} = req.body;
   

//     const product = await productModel.create({
//         name:name,
//         description:description,
//         category:category,
//         price:price,
//         sportscategory:sportscategory,
//         brandname:brandname,
//         image:image

//     })

//     res.send(product)
// }



const productSave = async(req,res)=>{
    const {name,description,category,price, sportscategory,brandname,image} = req.body;
   

    const product = await productModel.create({
        name:name,
        description:description,
        category:category,
        price:price,
        sportscategory:sportscategory,
        brandname:brandname,
        image:image

    })

    res.send(product)
}





const productSavedata = async(req,res)=>{
    const {name,description,category,price, sportscategory,brandname,image} = req.body;
   

    const product = await productModel.create({
        name:name,
        description:description,
        category:category,
        price:price,
        sportscategory:sportscategory,
        brandname:brandname,
        image:image

    })

    res.send(product)
}

const productDisplay = async(req,res)=>{
    const display = await productModel.find();
    res.send(display)
}


const productDetail= async(req,res)=>{
    const proDisplay = await productModel.findById(req.body.id);
    res.send(proDisplay);
}

const productCategory= async(req,res)=>{
  const {category} = req.query;

  const Data = await productModel.find({category:category})
  res.send(Data)
}

const productSportsCategory= async(req,res)=>{
    const {sportscategory} = req.query;
  
    const Data = await productModel.find({sportscategory:sportscategory})
    res.send(Data)
  }

  const productSearch=async(req,res)=>{
    let proname = req.query.product;
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


    const productShop = async(req,res)=>{
        const {lprice,hprice,mencate,womencate,kidcate} = req.body;
        console.log(lprice,hprice,mencate,womencate,kidcate)

        const Data= await productModel.find({$and:[{price:{$gte:lprice}}, {price:{$lte:hprice}},
             {$or:[{"category":mencate}, {"category":womencate}, {"category":kidcate}]}   ]});
             console.log(Data);
             res.send(Data)

    }


module.exports={
    productSave,
    productDisplay,
    productDetail,
    productCategory,
    productSportsCategory,
    productSavedata,
    productSearch,
    productShop

}

