
import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { addTocard } from '../cardslice';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const SearchData=()=>{
    const [mypro,setmypro]=useState("");
    const [mydata,setmydata] = useState([]);

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handlechange=(e)=>{
      setmypro(e.target.value);
      let api =`http://localhost:8000/product/productsearch/?product=${mypro}`;
      axios.get(api).then((res)=>{
         setmydata(res.data)
         console.log(res.data)
      })
    }

   

    const addtocardData=(id,name,desc,cate,price,img)=>{
        dispatch(addTocard({id:id,name:name,description:desc,category:cate,price:price,image:img,qnty:1}))
        
    }


    const ans = mydata.map((key)=>{
        return(
          <>
        
          <Card className="cardbox" style={{width:"250px", marginLeft:"10px",marginRight:"10px",marginBottom:"20px",height:"430px" ,borderRadius:"18px"}}>
          <a href="#"   onClick={()=>{navigate(`/productdetail/${key._id}`)}}>
          <Card.Img variant="top" src={key.image}   style={{width:"230px" ,height:"200px",margin:"auto",borderRadius:"18px",marginTop:"15px"}} />
          </a>
          <Card.Body>
            <Card.Title   >
           <a href="#" >
           <span style={{color:"white",backgroundColor:"#c24d2c",fontSize:"15px",marginLeft:"10px",width:"50px"}}>{key.brandname  }</span>
           </a>
            <br/>
              <span style={{fontWeight:"bold"}}>{key.name}</span></Card.Title>
            <Card.Text>
            <span > {key.description}</span>
             
              <br/>
              <h>Price : {key.price}</h>
              <br/>
              {key.category}  {key.sportscategory}
            </Card.Text>
            <div className="btnn1">
            <Button variant="primary" className="btnn" style={{width:"200px",height:"40px", color:"white",padding:"8px 12px 8px 12px",fontWeight:"800",fontSize:"18px",borderRadius:"50px"
              
            }}  onClick={()=>{addtocardData(key._id,key.name,key.description,key.category,key.price,key.image)}}>Add to Cart</Button></div>
          </Card.Body>
        </Card>
          
         
          </>
        )
      })

    return(
        <>
        <h1>This is search page</h1>

        Enter data :<input type="text" value={mypro} onChange={handlechange}/>

        {ans}
        </>
    )
}

export default SearchData;