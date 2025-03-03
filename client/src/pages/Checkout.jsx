

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { dataRemove } from "../cardslice";
import "../css/checkout.css"

const Checkout = () => {
  const myCard = useSelector((state) => state.mycard.card);
  const dispatch = useDispatch();

  const [isLoad, setIsLoad] = useState(false);
  const [input, setInput] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    mobile: "",
  });
  const [myPro, setMyPro] = useState({
    name: "",
    creator: "",
    img: "",
    proname: [],
    price: 0,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const initPay = (data) => {
    const options = {
      key: "rzp_test_RBDJ7R17VdVYkq", // Replace with your Razorpay key
      amount: data.amount,
      currency: data.currency,
      name: input.name,
      description: "Order Payment",
      image: myPro.img || "https://via.placeholder.com/100", // Placeholder image if none
      order_id: data.id,
      handler: async (response) => {
        try {
          if (response.razorpay_payment_id) {
            const verifyURL = "https://sports-ecommerce-website.onrender.com/api/payment/verify";
            await axios.post(verifyURL, response);

            // Clear cart and reset form
            myCard.forEach((item) => {
              dispatch(dataRemove(item.id));
            });

            setInput({
              name: "",
              address: "",
              city: "",
              pincode: "",
              mobile: "",
            });

            alert("Payment Successful!");
          }
        } catch (error) {
          console.error("Payment verification failed", error);
          alert("Payment verification failed.");
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
    setIsLoad(true);

    // Calculate product details
    const totalAmount = myCard.reduce((sum, item) => sum + item.price * item.qnty, 0);
    const productNames = myCard.map((item) => item.name);

    setMyPro({
      name: input.name,
      creator: "Testing",
      img: "https://via.placeholder.com/100",
      proname: productNames,
      price: totalAmount,
    });

    try {
      const orderURL = "https://sports-ecommerce-website.onrender.com/api/payment/orders";
      const { data } = await axios.post(orderURL, { amount: totalAmount });

      // Save order details in backend
      const userSaveURL = "https://sports-ecommerce-website.onrender.com/userorder/usersave";
      await axios.post(userSaveURL, {
        ...input,
        proname: productNames,
        price: totalAmount,
      });

      // Initialize payment
      initPay(data.data);
    } catch (error) {
      console.error("Error in payment processing", error);
      alert("Failed to initiate payment.");
    } finally {
      setIsLoad(false);
    }
  };

  let sno = 0;
  const ans = myCard.map((item) => {
    sno++;
    return (
      <tr key={item.id}>
        <td>{sno}</td>
        <td>
          <img src={item.image} alt={item.name} width="100" height="100" />
        </td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.product}</td>
        <td>₹{item.price}</td>
        <td>{item.qnty}</td>
        <td>₹{item.price * item.qnty}</td>
      </tr>
    );
  });

  const totalAmount = myCard.reduce((sum, item) => sum + item.price * item.qnty, 0);

  return (
    <div id="checkoutPage" className="container">
      <div className="row">
        {/* Form Section */}
        <div className="col-md-5 form-section">
          <h4 className="text-center mb-3">Fill Your Shipping Address</h4>
          <Form className="shadow p-4 rounded checkout-form">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={input.name}
                onChange={handleInput}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={input.address}
                onChange={handleInput}
                placeholder="Enter your address"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={input.city}
                onChange={handleInput}
                placeholder="Enter your city"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPincode">
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                name="pincode"
                value={input.pincode}
                onChange={handleInput}
                placeholder="Enter your pin code"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={input.mobile}
                onChange={handleInput}
                placeholder="Enter your mobile number"
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={handlePay}
              disabled={isLoad}
              className="w-100"
            >
              {isLoad ? "Processing..." : "Submit"}
            </Button>
          </Form>
        </div>

        {/* Cart Section */}
        <div className="col-md-7">
          <h4 className="text-center mb-3">Order Summary</h4>
          <Table striped bordered hover responsive className="shadow checkout-table">
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {myCard.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.product}</td>
                  <td>₹{item.price}</td>
                  <td>{item.qnty}</td>
                  <td>₹{item.price * item.qnty}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="7" className="text-end fw-bold">
                  Net Amount
                </td>
                <td className="text-center fw-bold">₹{totalAmount}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    // <div id="checkoutPage">
    //   <div id="checkoutForm">
    //     <h4 align="center">Fill Your Shipping Address</h4>
    //     <Form style={{ width: "90%" }}>
    //       <Form.Group className="mb-3" controlId="formBasicName">
    //         <Form.Label>Enter Name</Form.Label>
    //         <Form.Control
    //           type="text"
    //           name="name"
    //           value={input.name}
    //           onChange={handleInput}
    //           required
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicAddress">
    //         <Form.Label>Enter Address</Form.Label>
    //         <Form.Control
    //           type="text"
    //           name="address"
    //           value={input.address}
    //           onChange={handleInput}
    //           required
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicCity">
    //         <Form.Label>Enter City</Form.Label>
    //         <Form.Control
    //           type="text"
    //           name="city"
    //           value={input.city}
    //           onChange={handleInput}
    //           required
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicPincode">
    //         <Form.Label>Enter Pin Code</Form.Label>
    //         <Form.Control
    //           type="text"
    //           name="pincode"
    //           value={input.pincode}
    //           onChange={handleInput}
    //           required
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicMobile">
    //         <Form.Label>Enter Mobile</Form.Label>
    //         <Form.Control
    //           type="text"
    //           name="mobile"
    //           value={input.mobile}
    //           onChange={handleInput}
    //           required
    //         />
    //       </Form.Group>
    //       <Button variant="primary" type="button" onClick={handlePay} disabled={isLoad}>
    //         {isLoad ? "Processing..." : "Submit"}
    //       </Button>
    //     </Form>
    //   </div>

    //   <div id="checkoutTable">
    //     <Table striped bordered hover responsive>
    //       <thead>
    //         <tr>
    //           <th>S.No.</th>
    //           <th>Image</th>
    //           <th>Name</th>
    //           <th>Description</th>
    //           <th>Product</th>
    //           <th>Price</th>
    //           <th>Quantity</th>
    //           <th>Total Price</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {ans}
    //         <tr>
    //           <th colSpan="6"></th>
    //           <th>Net Amount</th>
    //           <th>₹{totalAmount}</th>
    //         </tr>
    //       </tbody>
    //     </Table>
    //   </div>
    // </div>
  );
};

export default Checkout;
