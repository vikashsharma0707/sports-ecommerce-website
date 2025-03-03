import axios from "axios";
import {  useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Shopbycategories from './Shopbycategories';
import { useDispatch } from 'react-redux';
import { addTocard } from '../cardslice';
import { useNavigate } from "react-router-dom";
import ProductModel from './ProductModel';
import { addTowishlist } from '../wishlistSlice';
import { FaHeart } from "react-icons/fa";
import "../css/shopproduct.css"



const ShopProduct=()=>{


    const [input,setinput] = useState({})
    const [mydata,setmydata] = useState([])


    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setinput(values=>({...values,[name]:value}))
        console.log(input)

    }

   


       const handleSubmit=()=>{
        let api="https://sports-ecommerce-website.onrender.com/product/shopproduct";
        axios.post(api,input).then((res)=>{
          setmydata(res.data)
          console.log(res.data)
        })
       }



       const dispatch = useDispatch();

       const addtocardData=(id,name,desc,cate,price,img)=>{
           dispatch(addTocard({id:id,name:name,description:desc,category:cate,price:price,image:img,qnty:1}))
           
       }
     
       const addtowishlistData=(id,name,desc,cate,price,img)=>{
         dispatch(addTowishlist({id:id,name:name,description:desc,category:cate,price:price,image:img,qnty:1}))
         
     }


     const ans = mydata.map((key)=>{
        return(
          <>
        
          <Card className="cardbox" style={{width:"250px", marginLeft:"10px",marginRight:"10px",marginBottom:"20px",height:"430px" ,borderRadius:"18px"}}>
    
            
          <a href="#"   onClick={()=>{navigate(`/productdetail/${key._id}`)}}>
          <Card.Img variant="top" src={key.image}   style={{width:"230px" ,height:"200px",margin:"auto",borderRadius:"18px",marginTop:"15px"}} />
          </a>
          <Card.Body>
    
          <div  className="flex">
    
            <div>
            <Card.Title   >
           <a href="#" >
           <span style={{color:"white",backgroundColor:"#c24d2c",fontSize:"15px",marginLeft:"10px",width:"50px"}}>{key.brandname  }</span>
           </a>
            <br/>
              <span style={{fontWeight:"bold"}}>{key.name}</span>
              <a href="#"  onClick={()=>{addtowishlistData(key._id,key.name,key.description,key.category,key.price,key.image)}}>
              <FaHeart />
              </a>
              </Card.Title>
            <Card.Text>
            <span  style={{fontSize:"15px"}}> {key.description}</span>
             
              <br/>
              <h>Price : {key.price}</h>
              <br/>
              {key.category}  {key.sportscategory}
            
            </Card.Text>
            </div>
    
            <div>
            <div className="btnn1">
            <Button variant="primary" className="btnn" style={{width:"200px",height:"40px", color:"white",padding:"8px 12px 8px 12px",fontWeight:"800",fontSize:"18px",borderRadius:"50px"
              
            }}  onClick={()=>{addtocardData(key._id,key.name,key.description,key.category,key.price,key.image)}}>Add to Cart</Button></div>
            </div>
    
    </div>
           
            
          </Card.Body>
        </Card>
          
         
          </>
        )
      })

    
    return(
        <>
        
        <h2 style={{textAlign:"center",fontWeight:"500"}}>This is shop product page</h2>
        <h4>Your Shopping Page</h4>

        <div  className="product" style={{display:"flex",justifyContent:"space-between"}}>
        
            <div  style={{marginTop:"60px",border:"2px solid black",marginLeft:"10px",padding:"10px 10px 10px 10px",height:"400px"}}>

            <div className="shoppage">
            <h style={{fontWeight:"800"}}> Lower Price :</h>   
          <input type="text" name="lprice"  value={input.lprice}  onChange={handleInput}/><br/><br/>
          <h style={{fontWeight:"800"}}> Higher Price :</h>   
                <input type="text"  name="hprice"  value={input.hprice}  onChange={handleInput}/><br/><br/>
                </div>

                <div  className="shoppage1">
                    <h5  style={{fontWeight:"600"}}>Select Category</h5>
                    <input type="checkbox"  value="mens" name="mencate" onChange={handleInput}/> Mens <br/>
                    <input type="checkbox" value="womens" name="womencate" onChange={handleInput}/> Womens <br/>
                    <input type="checkbox"  value="kids"  name="kidcate"    onChange={handleInput}/> Kids <br/>    
                </div>

                <button  onClick={handleSubmit}>Search Data</button>

            </div>


          <div>
          {/* <h1 style={{alignItems:"center",textAlign:"center",textAlign:"center"}}>Featured Products</h1> */}
    <div className="carddata" style={{marginTop:"60px"}}>
      {ans}
    </div>
          </div>


           

        </div>
        
        </>
    )
}

export default ShopProduct


