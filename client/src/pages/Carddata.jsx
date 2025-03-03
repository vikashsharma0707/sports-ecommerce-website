

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { qntyIncrement, qntyDecrement, dataRemove } from "../cardslice";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "../css/carddata.css"; // Import the new styles

const Carddata = () => {
  const myCard = useSelector((state) => state.mycard.card);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let sno = 0;
  let totalAmount = 0;

  const qntyInc = (id) => {
    dispatch(qntyIncrement({ id }));
  };

  const qntyDec = (id) => {
    dispatch(qntyDecrement({ id }));
  };

  const ans = myCard.map((key) => {
    totalAmount += key.price * key.qnty;
    sno++;
    return (
      <tr key={key.id}>
        <td>{sno}</td>
        <td>
          <img src={key.image} alt={key.name} className="product-image" />
        </td>
        <td>{key.name}</td>
        <td>{key.description}</td>
        <td>{key.category}</td>
        <td>₹{key.price}</td>
        <td className="quantity-control">
          <a href="#" onClick={() => qntyDec(key.id)} className="icon-control">
            <FaMinusCircle />
          </a>
          <span className="quantity">{key.qnty}</span>
          <a href="#" onClick={() => qntyInc(key.id)} className="icon-control">
            <FaPlusCircle />
          </a>
        </td>
        <td>₹{key.price * key.qnty}</td>
        <td>
          <Button
            id="btn"
            className="delete-button"
            onClick={() => dispatch(dataRemove(key.id))}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div id="carddata" className="container">
      <h1 className="cart-heading">Your Shopping Cart</h1>
      <Table striped bordered hover responsive className="cart-table shadow">
        <thead>
          <tr className="text-center">
            <th>S.No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ans}
          <tr className="text-center">
            <td colSpan="6"></td>
            <td className="fw-bold">Net Amount</td>
            <td className="fw-bold">₹{totalAmount}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="6"></td>
            <td colSpan="2" className="text-center">
              <button
                id="btn1"
                className="proceed-button"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Carddata;
