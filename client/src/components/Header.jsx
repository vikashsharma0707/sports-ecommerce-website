


import logo from "../images/logo.png";
import { RiAdminFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTocard } from "../cardslice";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../css/Header.css";

const Header = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [myPro, setMyPro] = useState("");
  const [myData, setMyData] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showWishlist, setShowWishlist] = useState(false);
  const handleCloseWishlist = () => setShowWishlist(false);

  const CardData = useSelector((state) => state.mycard.card);
  const CardData1 = useSelector((state) => state.mywishlist.card);

  const cardLength = CardData.length;
  const cardLength1 = CardData1.length;

  const handleSubmit = () => {
    const api = "https://sports-ecommerce-website.onrender.com/adminuser/usercheck";
    axios
      .post(api, { user: username, password })
      .then((res) => {
        if (res.status === 200) {
          message.success("You are successfully logged in");
          navigate("/admindashboard");
        } else {
          message.error("Login failed");
        }
      });
  };

  const handleSearch = () => {
    let api = `https://sports-ecommerce-website.onrender.com/product/productsearch/?product=${myPro}`;
    axios.get(api).then((res) => {
      setMyData(res.data);
      console.log(res.data);
    });
  };

  const dispatch = useDispatch();

  const addToCardData = (id, name, desc, cate, price, img) => {
    dispatch(
      addTocard({
        id,
        name,
        description: desc,
        category: cate,
        price,
        image: img,
        qnty: 1,
      })
    );
  };

  // Render product cards
  const productCards = myData.map((key) => (
    <Card
      key={key._id}
      className="cardbox"
      style={{ width: "250px", height: "430px", borderRadius: "18px" }}
    >
      <a href="#" onClick={() => navigate(`/productdetail/${key._id}`)}>
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
      </a>
      <Card.Body>
        <Card.Title>
          <span
            style={{
              color: "white",
              backgroundColor: "#c24d2c",
              fontSize: "15px",
              marginLeft: "10px",
              width: "50px",
            }}
          >
            {key.brandname}
          </span>
          <br />
          <span style={{ fontWeight: "bold" }}>{key.name}</span>
        </Card.Title>
        <Card.Text>
          <span>{key.description}</span>
          <br />
          Price : {key.price}
          <br />
          {key.category} {key.sportscategory}
          <br />
          <Button
            variant="primary"
            onClick={() =>
              addToCardData(
                key._id,
                key.name,
                key.description,
                key.category,
                key.price,
                key.image
              )
            }
          >
            Add to Cart
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  // Render wishlist items
  const wishlistItems = CardData1.map((key) => (
    <tr key={key._id}>
      <td>
        <img src={key.image} style={{ width: "100px", height: "100px" }} />
      </td>
      <td>{key.name}</td>
      <td>{key.description}</td>
      <td>{key.category}</td>
      <td>{key.price}</td>
      <td>
        <Button onClick={() => dispatch(dataRemove(key.id))}>Delete</Button>
      </td>
    </tr>
  ));

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar " >
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">SportsGear</span> {/* Example brand name */}
        </div>

        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={myPro}
              onChange={(e) => setMyPro(e.target.value)}
              className="search-input"
            />
            <FaSearch onClick={handleSearch} className="search-icon" />
          </div>

          <div className="header-icons">
            <div className="icon-container">
              <a href="#" onClick={handleShow}>
                <RiAdminFill />
                <span className="icon-label">Admin</span>
              </a>
            </div>

            <div className="icon-container">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/carddata");
                }}
              >
                <FaCartShopping size={24} />
                <span className="icon-label">Cart</span>
                {cardLength > 0 && (
                  <span className="cart-count">{cardLength}</span>
                )}
              </a>
            </div>

            <div className="icon-container">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowWishlist(true);
                }}
              >
                <FaHeart size={24} />
                <span className="icon-label">Wishlist</span>
                {cardLength1 > 0 && (
                  <span className="cart-count">{cardLength1}</span>
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="form-group">
            <label htmlFor="username">Enter admin name:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter admin name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose} className="modal-btn">
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} className="modal-btn">
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Product Cards */}
      <div className="carddata">{productCards}</div>

      {/* Wishlist Offcanvas */}
      <Offcanvas
        show={showWishlist}
        onHide={handleCloseWishlist}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Wishlist</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{wishlistItems}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;