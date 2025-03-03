import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { addTocard } from "../cardslice";



const ProductDetail=()=>{
    const {proid} = useParams()
    const dispatch = useDispatch();

    const [mydata,setmydata] =useState({});

    const loaddata=()=>{
        let api="https://sports-ecommerce-website.onrender.com/product/productdetail";
        axios.post(api,{id:proid}).then((res)=>{
           setmydata(res.data)
        })
    }

    useEffect(()=>{
        loaddata()
    },[])


    const addtocardData=(id,name,desc,cate,price,img)=>{
        dispatch(addTocard({id:id,name:name,description:desc,category:cate,price:price,image:img,qnty:1}))
        
    }
  
   
    return(
        <>
        
        

        <h2 align="center"  style={{fontWeight:"bold"}}> Product Detail </h2> 
           <div id="proDetail"  style={{marginTop:"50px"}}>
              <div id="proImage"> 
                    <img src={mydata.image} width="300" height="300" />                 
              </div>
              <div id="proData">
                  <h2 style={{color:'blue'}}> {mydata.name} </h2>
                  <h5>Product Detail : {mydata.description}</h5>
                  <h4 style={{color:'red'}}>Price- ${mydata.price}</h4>
                  <h4>Category</h4>
                  <h6> This Product for- {mydata.category}</h6>
              
                <Button className="shopbtn"
                onClick={()=>{addtocardData(mydata._id, mydata.name, mydata.description, mydata.category, mydata.price, mydata.image)}}
                >Add To Cart</Button>
              </div>
            </div>  
        </>
    )
}


export default ProductDetail;