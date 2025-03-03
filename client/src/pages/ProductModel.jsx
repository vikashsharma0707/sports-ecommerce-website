import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Shopbycategories from './Shopbycategories';
import { useDispatch } from 'react-redux';
import { addTocard } from '../cardslice';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [mydata, setmydata] = useState([]); // All product data
  const [show, setShow] = useState(false); // Modal visibility state
  const [selectedProduct, setSelectedProduct] = useState({}); // State for selected product details

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Close modal handler
  const handleClose = () => setShow(false);

  // Show modal and set selected product data
  const handleShow = (key) => {
    setSelectedProduct(key); // Store the selected product's data
    setShow(true);
  };

  // Fetch all products
  const loaddata = async () => {
    try {
      const res = await axios.get("http://localhost:8000/product/productdisplay");
      setmydata(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    loaddata();
  }, []);

  // Add to cart handler
  const addtocardData = (key) => {
    dispatch(addTocard({ ...key, qnty: 1 })); // Add product to cart with quantity
  };

  // Render product cards
  const productCards = mydata.map((key) => (
    <Card
      className="cardbox"
    //   style={{
    //     width: "250px",
    //     margin: "10px",
    //     height: "430px",
    //     borderRadius: "18px",
    //   }}
      key={key._id}
    >
      <div onClick={() => handleShow(key)} style={{ cursor: 'pointer' }}>
        <Card.Img
          variant="top"
          src={key.image}
          style={{
            width: "230px",
            height: "200px",
            margin: "auto",
            borderRadius: "18px",
            marginTop: "15px",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>
          <span style={{ fontWeight: "bold" }}>{key.name}</span>
        </Card.Title>
        <Card.Text>
          <span>{key.description}</span>
          <br />
          <strong>Price: {key.price}</strong>
          <br />
          {key.category}
        </Card.Text>
        <Button
          variant="primary"
          className="btnn"
          style={{
            width: "200px",
            height: "40px",
            color: "white",
            padding: "8px 12px",
            fontWeight: "800",
            fontSize: "18px",
            borderRadius: "50px",
          }}
          onClick={() => addtocardData(key)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <h1 style={{ textAlign: "center", padding: "30px 0px" }}>Featured Products</h1>
      <div className="carddata" style={{position:"absolute"}}>{productCards}</div>

      {/* Product Modal */}
      <Modal show={show} onHide={handleClose} centered  >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="proImage">
            <img src={selectedProduct.image} alt={selectedProduct.name} width="300" height="300" />
          </div>
          <div id="proData" style={{ marginTop: "20px" }}>
            <h4 style={{ color: 'blue' }}>{selectedProduct.name}</h4>
            <p>{selectedProduct.description}</p>
            <h4 style={{ color: 'red' }}>Price: ${selectedProduct.price}</h4>
            <h6>Category: {selectedProduct.category}</h6>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addtocardData(selectedProduct)}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>

      <Shopbycategories />
    </>
  );
};

export default Home;
