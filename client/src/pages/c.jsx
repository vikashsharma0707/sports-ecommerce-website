// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useSelector} from "react-redux";
// import Table from 'react-bootstrap/Table';
// import { useState } from 'react';
// import axios from "axios";
// const Checkout=()=>{
//     const myCard= useSelector((state)=>state.mycard.card);
   
//     const [mypro,setMypro] = useState({
//       name: "",
//       creator: "",
//       img: "",
//       price: ""
//   });
  
//   const initPay = (data) => {
//     const options = {
//       key : "rzp_test_RBDJ7R17VdVYkq",
//       amount: data.amount,
//       currency: data.currency,
//       name: mypro.name,
//       description: "Test",
//       image:mypro.img,
//       order_id: data.id,
//       handler: async (response) => {
//         try {
//           const verifyURL = "https://localhost:8000/api/payment/verify";
//           const {data} = await axios.post(verifyURL,response);
//         } catch(error) {
//           console.log(error);
//         }
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };
//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };
  
//   const handlePay = async () => {
//    setMypro(
//     {
//       name: proname,
//       creator: brand,
//       img: proimg,
//       price: totalAmount
//     }
//    )
    
//     try {
//       const orderURL = "http://localhost:8000/api/payment/orders";
//       const {data} = await axios.post(orderURL,{amount: mypro.price});
//       console.log(data);
//       initPay(data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  








//     let sno=0;
//   let totalAmount=0;
//   let proname="";
//   let brand="Zara";
//   let proimg="";
  
//     const ans= myCard.map((key)=>{
//         totalAmount+=key.price*key.qnty;
//         proname+=key.name+",  ";
//         proimg+=key.image;
//         sno++;
//         return(
//             <>
//                <tr>
//                 <td>{sno} </td>
//                 <td>
//                  <img src={key.image} width="100" height="100" /> </td>
//                 <td> {key.name} </td>
//                 <td> {key.description} </td>
//                 <td> {key.category} </td>
//                 <td> {key.price} </td>
//                 <td> 
//                   {key.qnty}    
//                   </td>
//                 <td> 
//                     {key.price * key.qnty} 
//                 </td>
//                 <td>
                   
//                 </td>
//                </tr>
            
//             </>
//         )
//     })








   






//     return(
//         <>
//         <div id="payPage">
//               <div id="payForm">
//     <h1> Fill Your Shipping Address</h1>
//          <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Name</Form.Label>
//         <Form.Control type="text"  />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Address</Form.Label>
//         <Form.Control type="text"  />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter City</Form.Label>
//         <Form.Control type="text"  />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Pin Code</Form.Label>
//         <Form.Control type="text"  />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Mobile</Form.Label>
//         <Form.Control type="text"  />
//       </Form.Group>
//       <Button variant="primary" type="button" onClick={handlePay}>
//         Submit
//       </Button>
//     </Form>


   




//               </div>
//                <div id="payMethod">
                
                
                
                
//                <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th> S.No.</th>
//           <th> </th>
//           <th>Name</th>
//           <th>Description</th>
//           <th>Category</th>
//           <th> Price </th>
//           <th> Quantity</th>
//           <th> Total Price</th>
//           <th> </th>
//         </tr>

//       </thead>
//       <tbody>
//           {ans}
//           <tr>
//           <th> </th>
//           <th> </th>
//           <th></th>
//           <th></th>
//           <th></th>
//           <th>  </th>
//           <th> Net Amount</th>
//           <th> {totalAmount}</th>
//           </tr>
//           <tr>
//           <th> </th>
//           <th> </th>
//           <th></th>
//           <th></th>
//           <th></th>
//           <th>  </th>
//           <th> 

      

//           </th>
//           <th> </th>
//           </tr>
//         </tbody>
//         </Table>
  
//                  </div>  
//         </div>
//         </>
//     )
// }
// export default Checkout;



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from "axios";
// import "../css/checkout.css";  // Import custom CSS

const Checkout = () => {
    const myCard = useSelector((state) => state.mycard.card);

    const [mypro, setMypro] = useState({
        name: "",
        creator: "",
        img: "",
        price: ""
    });

    const initPay = (data) => {
        const options = {
            key: "rzp_test_RBDJ7R17VdVYkq",
            amount: data.amount,
            currency: data.currency,
            name: mypro.name,
            description: "Test",
            image: mypro.img,
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyURL = "https://sports-ecommerce-website.onrender.com/api/payment/verify";
                    const { data } = await axios.post(verifyURL, response);
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const handlePay = async () => {
        setMypro({
            name: proname,
            creator: brand,
            img: proimg,
            price: totalAmount
        })

        try {
            const orderURL = "https://sports-ecommerce-website.onrender.com/api/payment/orders";
            const { data } = await axios.post(orderURL, { amount: mypro.price });
            console.log(data);
            initPay(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    let sno = 0;
    let totalAmount = 0;
    let proname = "";
    let brand = "Zara";
    let proimg = "";

    const ans = myCard.map((key) => {
        totalAmount += key.price * key.qnty;
        proname += key.name + ",  ";
        proimg += key.image;
        sno++;
        return (
            <tr key={sno}>
                <td>{sno}</td>
                <td><img src={key.image} width="100" height="100" alt={key.name} /></td>
                <td>{key.name}</td>
                <td>{key.description}</td>
                <td>{key.category}</td>
                <td>{key.price}</td>
                <td>{key.qnty}</td>
                <td>{key.price * key.qnty}</td>
                <td></td>
            </tr>
        )
    });

    return (
        <div id="payPage">
            <div id="payForm">
                <h1>Fill Your Shipping Address</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Address</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter City</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Pin Code</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Mobile</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handlePay}>
                        Submit
                    </Button>
                </Form>
            </div>
            <div id="payMethod">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                        <tr>
                            <th colSpan="6">Net Amount</th>
                            <th>{totalAmount}</th>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Checkout;
