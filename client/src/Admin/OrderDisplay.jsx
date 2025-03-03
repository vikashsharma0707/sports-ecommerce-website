import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';




const OrderDisplay=()=>{

    const [data,setdata] =useState([])

    const loaddata=()=>{
        let api = "https://sports-ecommerce-website.onrender.com/userorder/orderDisplay";
        axios.get(api).then((res)=>{
             setdata(res.data)
        })
    }
   

    useEffect(()=>{
        loaddata()
    },[])

    let sno=0;
    const ans = data.map((key)=>{
        sno++
        return(
            <>
           <tr>
            <td>{sno}</td>
    <td>{key.name}</td>
    <td>{key.address}</td>
    <td>{key.city}</td>
    <td>{key.pin}</td>
    <td>{key.mobile}</td>
    <td>
        <ul>
            {key.product.map((item, index) => (
                <li key={index}>{item}</li> // Display each product in a list
            ))}
        </ul>
    </td>
    <td>{key.price}</td>
</tr>


            </>
        )
    })
    return(
        <>
        
        

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Pin</th>
          <th>Mobile</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
        </Table>
        
        </>
    )
}

export default OrderDisplay;