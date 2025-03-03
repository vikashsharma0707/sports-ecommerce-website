// // // import logo from "../images/logo.png";
// // // import adminLogo from "../images/bann1.webp"; // Add your admin logo image here
// // // import { RiAdminFill } from "react-icons/ri";
// // // import { FaCartShopping } from "react-icons/fa6";
// // // import { FaHeart } from "react-icons/fa";
// // // import { FaSearch } from "react-icons/fa";
// // // import { FaBars } from "react-icons/fa";
// // // import { useState } from "react";
// // // import Button from "react-bootstrap/Button";
// // // import Modal from "react-bootstrap/Modal";
// // // import axios from "axios";
// // // import { message } from "antd";
// // // import { useNavigate, Link } from "react-router-dom";
// // // import { useSelector, useDispatch } from "react-redux";
// // // import { addTocard } from "../cardslice";
// // // import Card from "react-bootstrap/Card";
// // // import Offcanvas from "react-bootstrap/Offcanvas";
// // // import Dropdown from "react-bootstrap/Dropdown";
// // // import "../css/Nav.css"; // Import the external CSS file

// // // const Nav = () => {
// // //   const [username, setUsername] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [myPro, setMyPro] = useState("");
// // //   const [myData, setMyData] = useState([]);
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// // //   const navigate = useNavigate();
// // //   const [show, setShow] = useState(false);
// // //   const handleClose = () => setShow(false);
// // //   const handleShow = () => setShow(true);

// // //   const [showWishlist, setShowWishlist] = useState(false);
// // //   const handleCloseWishlist = () => setShowWishlist(false);

// // //   const CardData = useSelector((state) => state.mycard.card);
// // //   const CardData1 = useSelector((state) => state.mywishlist.card);

// // //   const cardLength = CardData.length;
// // //   const cardLength1 = CardData1.length;

// // //   const handleSubmit = () => {
// // //     const api = "http://localhost:8000/adminuser/usercheck";
// // //     axios
// // //       .post(api, { user: username, password })
// // //       .then((res) => {
// // //         if (res.status === 200) {
// // //           message.success("You are successfully logged in");
// // //           navigate("/admindashboard");
// // //           handleClose(); // Close modal on success
// // //         } else {
// // //           message.error("Login failed");
// // //         }
// // //       })
// // //       .catch((error) => {
// // //         message.error("An error occurred. Please try again.");
// // //         console.error("Login error:", error);
// // //       });
// // //   };

// // //   const handleSearch = () => {
// // //     let api = `http://localhost:8000/product/productsearch/?product=${myPro}`;
// // //     axios.get(api).then((res) => {
// // //       setMyData(res.data);
// // //       console.log(res.data);
// // //       navigate("/searchdata"); // Navigate to search results page
// // //     });
// // //   };

// // //   const dispatch = useDispatch();

// // //   const addToCardData = (id, name, desc, cate, price, img) => {
// // //     dispatch(
// // //       addTocard({
// // //         id,
// // //         name,
// // //         description: desc,
// // //         category: cate,
// // //         price,
// // //         image: img,
// // //         qnty: 1,
// // //       })
// // //     );
// // //   };

// // //   // Render product cards
// // //   const productCards = myData.map((key) => (
// // //     <Card
// // //       key={key._id}
// // //       className="cardbox"
// // //       style={{ width: "250px", height: "430px", borderRadius: "18px" }}
// // //     >
// // //       <a href="#" onClick={() => navigate(`/productdetail/${key._id}`)}>
// // //         <Card.Img
// // //           variant="top"
// // //           src={key.image}
// // //           style={{
// // //             width: "230px",
// // //             height: "200px",
// // //             margin: "auto",
// // //             borderRadius: "18px",
// // //             marginTop: "15px",
// // //           }}
// // //         />
// // //       </a>
// // //       <Card.Body>
// // //         <Card.Title>
// // //           <span
// // //             style={{
// // //               color: "white",
// // //               backgroundColor: "#c24d2c",
// // //               fontSize: "15px",
// // //               marginLeft: "10px",
// // //               width: "50px",
// // //             }}
// // //           >
// // //             {key.brandname}
// // //           </span>
// // //           <br />
// // //           <span style={{ fontWeight: "bold" }}>{key.name}</span>
// // //         </Card.Title>
// // //         <Card.Text>
// // //           <span>{key.description}</span>
// // //           <br />
// // //           Price : {key.price}
// // //           <br />
// // //           {key.category} {key.sportscategory}
// // //           <br />
// // //           <Button
// // //             variant="primary"
// // //             onClick={() =>
// // //               addToCardData(
// // //                 key._id,
// // //                 key.name,
// // //                 key.description,
// // //                 key.category,
// // //                 key.price,
// // //                 key.image
// // //               )
// // //             }
// // //           >
// // //             Add to Cart
// // //           </Button>
// // //         </Card.Text>
// // //       </Card.Body>
// // //     </Card>
// // //   ));

// // //   // Render wishlist items
// // //   const wishlistItems = CardData1.map((key) => (
// // //     <tr key={key._id}>
// // //       <td>
// // //         <img src={key.image} style={{ width: "100px", height: "100px" }} />
// // //       </td>
// // //       <td>{key.name}</td>
// // //       <td>{key.description}</td>
// // //       <td>{key.category}</td>
// // //       <td>{key.price}</td>
// // //       <td>
// // //         <Button onClick={() => dispatch(dataRemove(key.id))}>Delete</Button>
// // //       </td>
// // //     </tr>
// // //   ));

// // //   // Toggle mobile menu
// // //   const toggleMobileMenu = () => {
// // //     setIsMobileMenuOpen((prev) => !prev); // Ensure state toggle works
// // //     console.log("Menu toggled, isMobileMenuOpen:", !isMobileMenuOpen); // Debug log
// // //   };

// // //   return (
// // //     <>
// // //       <nav className="navbar">
// // //         {/* Left Section: Logo and Category Toggle */}
// // //         <div className="navbar-left">
// // //           <div className="category-toggle" onClick={toggleMobileMenu}>
// // //             <FaBars /> <span>ALL SPORTS</span>
// // //           </div>
// // //           <div className="brand-logo">
// // //             <img src={logo} alt="Logo" className="logo" />
// // //             <span className="brand-name">SportsGear</span>
// // //           </div>
// // //           {/* Admin Logo and Modal Trigger */}
// // //           <div className="admin-section" onClick={handleShow}>
// // //             <img src={adminLogo} alt="Admin" className="admin-logo" />
// // //             <span className="admin-label">Admin</span>
// // //           </div>
// // //         </div>

// // //         {/* Center Section: Search Bar */}
// // //         <div className="navbar-center">
// // //           <div className="search-bar">
// // //             <input
// // //               type="text"
// // //               placeholder="Search for products..."
// // //               value={myPro}
// // //               onChange={(e) => setMyPro(e.target.value)}
// // //               className="search-input"
// // //             />
// // //             <FaSearch onClick={handleSearch} className="search-icon" />
// // //           </div>
// // //         </div>

// // //         {/* Right Section: Delivery and Icons */}
// // //         <div className="navbar-right">
// // //           <div className="delivery-location">
// // //             <span>Delivery Location</span>
// // //             <span className="location-code">560002</span>
// // //             <span className="change-link">CHANGE</span>
// // //           </div>
// // //           <div className="user-icons">
// // //             <div className="icon-container">
// // //               <Link to="/signin">
// // //                 <span className="icon-label">Sign In</span>
// // //               </Link>
// // //             </div>
// // //             <div className="icon-container">
// // //               <Link to="/mystore">
// // //                 <span className="icon-label">My Store</span>
// // //               </Link>
// // //             </div>
// // //             <div className="icon-container">
// // //               <Link to="/support">
// // //                 <span className="icon-label">Support</span>
// // //               </Link>
// // //             </div>
// // //             <div className="icon-container">
// // //               <a
// // //                 href="#"
// // //                 onClick={(e) => {
// // //                   e.preventDefault();
// // //                   setShowWishlist(true);
// // //                 }}
// // //               >
// // //                 <FaHeart size={20} />
// // //                 <span className="icon-label">Wishlist</span>
// // //                 {cardLength1 > 0 && (
// // //                   <span className="cart-count">{cardLength1}</span>
// // //                 )}
// // //               </a>
// // //             </div>
// // //             <div className="icon-container">
// // //               <a
// // //                 href="#"
// // //                 onClick={(e) => {
// // //                   e.preventDefault();
// // //                   navigate("/carddata");
// // //                 }}
// // //               >
// // //                 <FaCartShopping size={20} />
// // //                 <span className="icon-label">Cart</span>
// // //                 {cardLength > 0 && (
// // //                   <span className="cart-count">{cardLength}</span>
// // //                 )}
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Hamburger Menu for Mobile */}
// // //         <div className="hamburger-menu" onClick={toggleMobileMenu}>
// // //           <FaBars />
// // //         </div>

// // //         {/* Mobile Navigation Menu */}
// // //         <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
// // //         <Link to="home">Home</Link>
// // //         <Link to="searchdata">Search</Link>
// // //         <Link to="shopproduct">Shopproduct</Link>
// // //         <Link to="cricket">Cricket</Link>
// // //         <Link to="football">Football</Link>
// // //         <Link to="racket">Racket</Link>
// // //         <Link to="swimming">Swimming</Link>
// // //         <Link to="fitness">Fitness</Link>

// // //           <Dropdown className="mobile-dropdown">
// // //             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
// // //               Other Sports
// // //             </Dropdown.Toggle>
// // //             <Dropdown.Menu>
// // //               <Dropdown.Item as={Link} to="othersports" onClick={toggleMobileMenu}>Action 1</Dropdown.Item>
// // //               <Dropdown.Item as={Link} to="othersports" onClick={toggleMobileMenu}>Action 2</Dropdown.Item>
// // //               <Dropdown.Item as={Link} to="othersports" onClick={toggleMobileMenu}>Action 3</Dropdown.Item>
// // //             </Dropdown.Menu>
// // //           </Dropdown>

// // //           <Dropdown className="mobile-dropdown">
// // //             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
// // //               Top Brands
// // //             </Dropdown.Toggle>
// // //             <Dropdown.Menu>
// // //               <Dropdown.Item as={Link} to="topbrands" onClick={toggleMobileMenu}>Brand 1</Dropdown.Item>
// // //               <Dropdown.Item as={Link} to="topbrands" onClick={toggleMobileMenu}>Brand 2</Dropdown.Item>
// // //               <Dropdown.Item as={Link} to="topbrands" onClick={toggleMobileMenu}>Brand 3</Dropdown.Item>
// // //             </Dropdown.Menu>
// // //           </Dropdown>

// // //           <Dropdown className="mobile-dropdown">
// // //             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
// // //               Category
// // //             </Dropdown.Toggle>
// // //             <Dropdown.Menu>
// // //               <Dropdown.Item as={Link} to="mens" onClick={toggleMobileMenu}>Mens</Dropdown.Item>
// // //               <Dropdown.Item as={Link} to="womens" onClick={toggleMobileMenu}>Womens</Dropdown.Item>
// // //               <Dropdown.Item as={Link} to="kids" onClick={toggleMobileMenu}>Kids</Dropdown.Item>
// // //             </Dropdown.Menu>
// // //           </Dropdown>
// // //         </div>
// // //       </nav>

// // //       <Modal
// // //         show={show}
// // //         onHide={handleClose}
// // //         centered
// // //         className="custom-modal"
// // //       >
// // //         <Modal.Header closeButton className="modal-header">
// // //           <Modal.Title>
// // //             <img src={adminLogo} alt="Admin Logo" className="admin-modal-logo" />
// // //             Admin Login
// // //           </Modal.Title>
// // //         </Modal.Header>
// // //         <Modal.Body className="modal-body">
// // //           <div className="form-group">
// // //             <label htmlFor="username">Enter Admin Name:</label>
// // //             <input
// // //               type="text"
// // //               id="username"
// // //               placeholder="Enter admin name"
// // //               value={username}
// // //               onChange={(e) => setUsername(e.target.value)}
// // //               className="form-input"
// // //             />
// // //           </div>
// // //           <div className="form-group">
// // //             <label htmlFor="password">Enter Password:</label>
// // //             <input
// // //               type="password"
// // //               id="password"
// // //               placeholder="Enter password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               className="form-input"
// // //             />
// // //           </div>
// // //         </Modal.Body>
// // //         <Modal.Footer className="modal-footer">
// // //           <Button variant="secondary" onClick={handleClose} className="modal-btn">
// // //             Cancel
// // //           </Button>
// // //           <Button variant="primary" onClick={handleSubmit} className="modal-btn">
// // //             Login
// // //           </Button>
// // //         </Modal.Footer>
// // //       </Modal>

// // //       {/* Product Cards */}
// // //       <div className="carddata">{productCards}</div>

// // //       {/* Wishlist Offcanvas */}
// // //       <Offcanvas
// // //         show={showWishlist}
// // //         onHide={handleCloseWishlist}
// // //         placement="end"
// // //       >
// // //         <Offcanvas.Header closeButton>
// // //           <Offcanvas.Title>Wishlist</Offcanvas.Title>
// // //         </Offcanvas.Header>
// // //         <Offcanvas.Body>{wishlistItems}</Offcanvas.Body>
// // //       </Offcanvas>
// // //     </>
// // //   );
// // // };

// // // export default Nav;

// // import logo from "../images/bann1.webp";
// // import adminLogo from "../images/bann1.webp"; // Add your admin logo image here
// // import { RiAdminFill } from "react-icons/ri";
// // import { FaCartShopping } from "react-icons/fa6";
// // import { FaHeart } from "react-icons/fa";
// // import { FaSearch } from "react-icons/fa";
// // import { FaBars } from "react-icons/fa";
// // import { useState } from "react";
// // import Button from "react-bootstrap/Button";
// // import Modal from "react-bootstrap/Modal";
// // import axios from "axios";
// // import { message } from "antd";
// // import { useNavigate, Link } from "react-router-dom";
// // import { useSelector, useDispatch } from "react-redux";
// // import { addTocard } from "../cardslice";
// // import Card from "react-bootstrap/Card";
// // import Offcanvas from "react-bootstrap/Offcanvas";
// // import Dropdown from "react-bootstrap/Dropdown";
// // import "../css/Nav.css"; // Import the external CSS file

// // const Nav = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [myPro, setMyPro] = useState("");
// //   const [myData, setMyData] = useState([]);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const navigate = useNavigate();
// //   const [show, setShow] = useState(false);
// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);

// //   const [showWishlist, setShowWishlist] = useState(false);
// //   const handleCloseWishlist = () => setShowWishlist(false);

// //   const CardData = useSelector((state) => state.mycard.card);
// //   const CardData1 = useSelector((state) => state.mywishlist.card);

// //   const cardLength = CardData.length;
// //   const cardLength1 = CardData1.length;

// //   const handleSubmit = () => {
// //     const api = "http://localhost:8000/adminuser/usercheck";
// //     axios
// //       .post(api, { user: username, password })
// //       .then((res) => {
// //         if (res.status === 200) {
// //           message.success("You are successfully logged in");
// //           navigate("/admindashboard");
// //           handleClose();
// //         } else {
// //           message.error("Login failed");
// //         }
// //       })
// //       .catch((error) => {
// //         message.error("An error occurred. Please try again.");
// //         console.error("Login error:", error);
// //       });
// //   };

// //   const handleSearch = () => {
// //     let api = `http://localhost:8000/product/productsearch/?product=${myPro}`;
// //     axios.get(api).then((res) => {
// //       setMyData(res.data);
// //       console.log(res.data);
// //       navigate("/searchdata", { state: { searchResults: res.data } }); // Absolute path
// //     });
// //   };

// //   const dispatch = useDispatch();

// //   const addToCardData = (id, name, desc, cate, price, img) => {
// //     dispatch(
// //       addTocard({
// //         id,
// //         name,
// //         description: desc,
// //         category: cate,
// //         price,
// //         image: img,
// //         qnty: 1,
// //       })
// //     );
// //   };

// //   // Render product cards
// //   const productCards = myData.map((key) => (
// //     <Card
// //       key={key._id}
// //       className="cardbox"
// //       style={{ width: "250px", height: "430px", borderRadius: "18px" }}
// //     >
// //       <a href="#" onClick={() => navigate(`/productdetail/${key._id}`)}>
// //         <Card.Img
// //           variant="top"
// //           src={key.image}
// //           style={{
// //             width: "230px",
// //             height: "200px",
// //             margin: "auto",
// //             borderRadius: "18px",
// //             marginTop: "15px",
// //           }}
// //         />
// //       </a>
// //       <Card.Body>
// //         <Card.Title>
// //           <span
// //             style={{
// //               color: "white",
// //               backgroundColor: "#c24d2c",
// //               fontSize: "15px",
// //               marginLeft: "10px",
// //               width: "50px",
// //             }}
// //           >
// //             {key.brandname}
// //           </span>
// //           <br />
// //           <span style={{ fontWeight: "bold" }}>{key.name}</span>
// //         </Card.Title>
// //         <Card.Text>
// //           <span>{key.description}</span>
// //           <br />
// //           Price : {key.price}
// //           <br />
// //           {key.category} {key.sportscategory}
// //           <br />
// //           <Button
// //             variant="primary"
// //             onClick={() =>
// //               addToCardData(
// //                 key._id,
// //                 key.name,
// //                 key.description,
// //                 key.category,
// //                 key.price,
// //                 key.image
// //               )
// //             }
// //           >
// //             Add to Cart
// //           </Button>
// //         </Card.Text>
// //       </Card.Body>
// //     </Card>
// //   ));

// //   // Render wishlist items
// //   const wishlistItems = CardData1.map((key) => (
// //     <tr key={key._id}>
// //       <td>
// //         <img src={key.image} style={{ width: "100px", height: "100px" }} />
// //       </td>
// //       <td>{key.name}</td>
// //       <td>{key.description}</td>
// //       <td>{key.category}</td>
// //       <td>{key.price}</td>
// //       <td>
// //         <Button onClick={() => dispatch(dataRemove(key.id))}>Delete</Button>
// //       </td>
// //     </tr>
// //   ));

// //   // Toggle mobile menu
// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen((prev) => !prev);
// //     console.log("Menu toggled, isMobileMenuOpen:", !isMobileMenuOpen);
// //   };

// //   return (
// //     <>
// //       <nav className="navbar">
// //         {/* Left Section: Logo and Category Toggle */}
// //         <div className="navbar-left">
// //           <div className="category-toggle" onClick={toggleMobileMenu}>
// //             <FaBars /> <span>ALL SPORTS</span>
// //           </div>
// //           <div className="brand-logo">
// //             <img src={logo} alt="Logo" className="logo" />
// //             <span className="brand-name">SportsGear</span>
// //           </div>
// //           {/* Admin Logo and Modal Trigger */}
          
// //         </div>

// //         {/* Center Section: Search Bar */}
// //         <div className="navbar-center">
// //           <div className="search-bar">
// //             <input
// //               type="text"
// //               placeholder="Search for products..."
// //               value={myPro}
// //               onChange={(e) => setMyPro(e.target.value)}
// //               className="search-input"
// //             />
// //             <FaSearch onClick={handleSearch} className="search-icon" />
// //           </div>
// //         </div>

// //         {/* Right Section: Delivery and Icons */}
// //         <div className="navbar-right">
          
// //           <div className="user-icons">
           

// //             {/* <div className="admin-section" onClick={handleShow}>
// //             <img src={adminLogo} alt="Admin" className="admin-logo" />
// //             <span className="admin-label">Admin</span>
// //           </div> */}

// // <div className="icon-container">
// //               <a href="#" onClick={handleShow}>
// //                 <RiAdminFill />
// //                 <span className="icon-label">Admin</span>
// //               </a>
// //             </div>

          
// //             <div className="icon-container">
// //               <a
// //                 href="#"
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   setShowWishlist(true);
// //                 }}
// //               >
// //                 <FaHeart size={20} />
// //                 <span className="icon-label">Wishlist</span>
// //                 {cardLength1 > 0 && (
// //                   <span className="cart-count">{cardLength1}</span>
// //                 )}
// //               </a>
// //             </div>
// //             <div className="icon-container">
// //               <a
// //                 href="#"
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   navigate("/carddata");
// //                 }}
// //               >
// //                 <FaCartShopping size={20} />
// //                 <span className="icon-label">Cart</span>
// //                 {cardLength > 0 && (
// //                   <span className="cart-count">{cardLength}</span>
// //                 )}
// //               </a>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Hamburger Menu for Mobile */}
// //         <div className="hamburger-menu" onClick={toggleMobileMenu}>
// //           <FaBars />
// //         </div>

// //         {/* Mobile Navigation Menu */}
// //         <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
// //           <Link to="/home" onClick={toggleMobileMenu}>Home</Link>
// //           <Link to="/searchdata" onClick={toggleMobileMenu}>Search</Link>
// //           <Link to="/shopproduct" onClick={toggleMobileMenu}>Shopproduct</Link>
// //           <Link to="/cricket" onClick={toggleMobileMenu}>Cricket</Link>
// //           <Link to="/football" onClick={toggleMobileMenu}>Football</Link>
// //           <Link to="/racket" onClick={toggleMobileMenu}>Racket</Link>
// //           <Link to="/swimming" onClick={toggleMobileMenu}>Swimming</Link>
// //           <Link to="/fitness" onClick={toggleMobileMenu}>Fitness</Link>

// //           <Dropdown className="mobile-dropdown">
// //             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
// //               Other Sports
// //             </Dropdown.Toggle>
// //             <Dropdown.Menu>
// //               <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 1</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 2</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 3</Dropdown.Item>
// //             </Dropdown.Menu>
// //           </Dropdown>

// //           <Dropdown className="mobile-dropdown">
// //             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
// //               Top Brands
// //             </Dropdown.Toggle>
// //             <Dropdown.Menu>
// //               <Dropdown.Item as={Link} to="/topbrands" onClick={toggleMobileMenu}>Brand 1</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/topbrands" onClick={toggleMobileMenu}>Brand 2</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/topbrands" onClick={toggleMobileMenu}>Brand 3</Dropdown.Item>
// //             </Dropdown.Menu>
// //           </Dropdown>

// //           <Dropdown className="mobile-dropdown">
// //             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
// //               Category
// //             </Dropdown.Toggle>
// //             <Dropdown.Menu>
// //               <Dropdown.Item as={Link} to="/mens" onClick={toggleMobileMenu}>Mens</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/womens" onClick={toggleMobileMenu}>Womens</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/kids" onClick={toggleMobileMenu}>Kids</Dropdown.Item>
// //             </Dropdown.Menu>
// //           </Dropdown>
// //         </div>
// //       </nav>

// //       <Modal
// //         show={show}
// //         onHide={handleClose}
// //         centered
// //         className="custom-modal"
// //       >
// //         <Modal.Header closeButton className="modal-header">
// //           <Modal.Title>
// //             <img src={adminLogo} alt="Admin Logo" className="admin-modal-logo" />
// //             Admin Login
// //           </Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body className="modal-body">
// //           <div className="form-group">
// //             <label htmlFor="username">Enter Admin Name:</label>
// //             <input
// //               type="text"
// //               id="username"
// //               placeholder="Enter admin name"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               className="form-input"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="password">Enter Password:</label>
// //             <input
// //               type="password"
// //               id="password"
// //               placeholder="Enter password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="form-input"
// //             />
// //           </div>
// //         </Modal.Body>
// //         <Modal.Footer className="modal-footer">
// //           <Button variant="secondary" onClick={handleClose} className="modal-btn">
// //             Cancel
// //           </Button>
// //           <Button variant="primary" onClick={handleSubmit} className="modal-btn">
// //             Login
// //           </Button>
// //         </Modal.Footer>
// //       </Modal>

// //       {/* Product Cards */}
// //       <div className="carddata">{productCards}</div>

// //       {/* Wishlist Offcanvas */}
// //       <Offcanvas
// //         show={showWishlist}
// //         onHide={handleCloseWishlist}
// //         placement="end"
// //       >
// //         <Offcanvas.Header closeButton>
// //           <Offcanvas.Title>Wishlist</Offcanvas.Title>
// //         </Offcanvas.Header>
// //         <Offcanvas.Body>{wishlistItems}</Offcanvas.Body>
// //       </Offcanvas>
// //     </>
// //   );
// // };

// // export default Nav;


// // import logo from "../images/logo.png";
// // import adminLogo from "../images/bann1.webp"; // Replace with actual admin logo if different
// // import { RiAdminFill } from "react-icons/ri";
// // import { FaCartShopping } from "react-icons/fa6";
// // import { FaHeart } from "react-icons/fa";
// // import { FaSearch } from "react-icons/fa";
// // import { FaBars } from "react-icons/fa";
// // import { useState } from "react";
// // import Button from "react-bootstrap/Button";
// // import Modal from "react-bootstrap/Modal";
// // import axios from "axios";
// // import { message } from "antd";
// // import { useNavigate, Link } from "react-router-dom";
// // import { useSelector, useDispatch } from "react-redux";
// // import { addTocard } from "../cardslice";
// // import Card from "react-bootstrap/Card";
// // import Offcanvas from "react-bootstrap/Offcanvas";
// // import Dropdown from "react-bootstrap/Dropdown";
// // import "../css/Nav.css"; // Import the external CSS file
// // import { IoMdSearch } from "react-icons/io";

// // const Nav = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [myPro, setMyPro] = useState("");
// //   const [myData, setMyData] = useState([]);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const navigate = useNavigate();
// //   const [show, setShow] = useState(false);
// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);

// //   const [showWishlist, setShowWishlist] = useState(false);
// //   const handleCloseWishlist = () => setShowWishlist(false);

// //   const CardData = useSelector((state) => state.mycard.card);
// //   const CardData1 = useSelector((state) => state.mywishlist.card);

// //   const cardLength = CardData.length;
// //   const cardLength1 = CardData1.length;

// //   const handleSubmit = () => {
// //     const api = "http://localhost:8000/adminuser/usercheck";
// //     axios
// //       .post(api, { user: username, password })
// //       .then((res) => {
// //         if (res.status === 200) {
// //           message.success("You are successfully logged in");
// //           navigate("/admindashboard");
// //           handleClose();
// //         } else {
// //           message.error("Login failed");
// //         }
// //       })
// //       .catch((error) => {
// //         message.error("An error occurred. Please try again.");
// //         console.error("Login error:", error);
// //       });
// //   };

// //   const handleSearch = () => {
// //     let api = `http://localhost:8000/product/productsearch/?product=${myPro}`;
// //     axios.get(api).then((res) => {
// //       setMyData(res.data);
// //       console.log(res.data);
// //       // navigate("/searchdata", { state: { searchResults: res.data } });
// //     });
// //   };

// //   const dispatch = useDispatch();

// //   const addToCardData = (id, name, desc, cate, price, img) => {
// //     dispatch(
// //       addTocard({
// //         id,
// //         name,
// //         description: desc,
// //         category: cate,
// //         price,
// //         image: img,
// //         qnty: 1,
// //       })
// //     );
// //   };

// //   // Render product cards
// //   const productCards = myData.map((key) => (
// //     <Card key={key._id} className="product-card">
// //       <a href="#" onClick={() => navigate(`/productdetail/${key._id}`)}>
// //         <Card.Img variant="top" src={key.image} className="product-image" />
// //       </a>
// //       <Card.Body>
// //         <Card.Title>
// //           <span className="brand-tag">{key.brandname}</span>
// //           <br />
// //           <span className="product-name">{key.name}</span>
// //         </Card.Title>
// //         <Card.Text>
// //           <span className="product-description">{key.description}</span>
// //           <br />
// //           <span className="product-price">Price: {key.price}</span>
// //           <br />
// //           <span className="product-category">
// //             {key.category} {key.sportscategory}
// //           </span>
// //           <br />
// //           <Button variant="primary" className="add-to-cart-btn" onClick={() => addToCardData(key._id, key.name, key.description, key.category, key.price, key.image)}>
// //             Add to Cart
// //           </Button>
// //         </Card.Text>
// //       </Card.Body>
// //     </Card>
// //   ));

// //   // Render wishlist items
// //   const wishlistItems = CardData1.map((key) => (
// //     <tr key={key._id}>
// //       <td><img src={key.image} style={{ width: "100px", height: "100px" }} alt={key.name} /></td>
// //       <td>{key.name}</td>
// //       <td>{key.description}</td>
// //       <td>{key.category}</td>
// //       <td>{key.price}</td>
// //       <td><Button onClick={() => dispatch(dataRemove(key.id))}>Delete</Button></td>
// //     </tr>
// //   ));

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen((prev) => !prev);
// //     console.log("Menu toggled, isMobileMenuOpen:", !isMobileMenuOpen);
// //   };

// //   return (
// //     <>
// //       <nav className="navbar">
// //         <div className="navbar-left">
// //           <div className="category-toggle" onClick={toggleMobileMenu}>
// //             <FaBars /> <span>ALL SPORTS</span>
// //           </div>
// //           <div className="brand-logo">
// //             <img src={logo} alt="Logo" className="logo" />
            
// //           </div>
          
// //         </div>

// //         <div className="navbar-center">
// //           <div className="search-bar">
// //             <input
// //               type="text"
// //               placeholder="Search for products..."
// //               value={myPro}
// //               onChange={(e) => setMyPro(e.target.value)}
// //               className="search-input"
// //             />
// //             {/* <FaSearch className="search-icon" onClick={handleSearch} /> */}
// //             <IoMdSearch  className="search-icon" onClick={handleSearch} />
// //           </div>
// //         </div>

// //         <div className="navbar-right">
          
// //           <div className="user-icons">
// //             <div className="icon-container">
// //               <Link to="/signin" className="icon-link">
// //                 <span className="icon-label">Sign In</span>
// //               </Link>
// //             </div>
// //             <div className="icon-container">
// //               <Link to="/mystore" className="icon-link">
// //                 <span className="icon-label">My Store</span>
// //               </Link>
// //             </div>
// //             <div className="icon-container">
// //               <Link to="/support" className="icon-link">
// //                 <span className="icon-label">Support</span>
// //               </Link>
// //             </div>

// //             <div className="admin-section" onClick={handleShow}>
// //             <RiAdminFill className="admin-icon" />
// //             <span className="admin-label"></span>
// //           </div>
// //             <div className="icon-container">
// //               <a href="#" onClick={(e) => { e.preventDefault(); setShowWishlist(true); }} className="icon-link">
// //                 <FaHeart className="icon" />
// //                 <span className="icon-label">Wishlist</span>
// //                 {cardLength1 > 0 && <span className="cart-count">{cardLength1}</span>}
// //               </a>
// //             </div>
// //             <div className="icon-container">
// //               <a href="#" onClick={(e) => { e.preventDefault(); navigate("/carddata"); }} className="icon-link">
// //                 <FaCartShopping className="icon" />
// //                 <span className="icon-label">Cart</span>
// //                 {cardLength > 0 && <span className="cart-count">{cardLength}</span>}
// //               </a>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="hamburger-menu" onClick={toggleMobileMenu}>
// //           <FaBars />
// //         </div>

// //         <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
// //           <Link to="/home" onClick={toggleMobileMenu}>Home</Link>
// //           <Link to="/searchdata" onClick={toggleMobileMenu}>Search</Link>
// //           <Link to="/shopproduct" onClick={toggleMobileMenu}>Shopproduct</Link>
// //           <Link to="/cricket" onClick={toggleMobileMenu}>Cricket</Link>
// //           <Link to="/football" onClick={toggleMobileMenu}>Football</Link>
// //           <Link to="/racket" onClick={toggleMobileMenu}>Racket</Link>
// //           <Link to="/swimming" onClick={toggleMobileMenu}>Swimming</Link>
// //           <Link to="/fitness" onClick={toggleMobileMenu}>Fitness</Link>

// //           <Dropdown className="mobile-dropdown">
// //             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
// //               Other Sports
// //             </Dropdown.Toggle>
// //             <Dropdown.Menu>
// //               <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 1</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 2</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 3</Dropdown.Item>
// //             </Dropdown.Menu>
// //           </Dropdown>

// //           <Dropdown className="mobile-dropdown">
// //             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
// //               Top Brands
// //             </Dropdown.Toggle>
// //             <Dropdown.Menu>
// //               <Dropdown.Item as={Link} to="/topbrands" onClick={toggleMobileMenu}>Brand 1</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/topbrands" onClick={toggleMobileMenu}>Brand 2</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/topbrands" onClick={toggleMobileMenu}>Brand 3</Dropdown.Item>
// //             </Dropdown.Menu>
// //           </Dropdown>

// //           <Dropdown className="mobile-dropdown">
// //             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
// //               Category
// //             </Dropdown.Toggle>
// //             <Dropdown.Menu>
// //               <Dropdown.Item as={Link} to="/mens" onClick={toggleMobileMenu}>Mens</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/womens" onClick={toggleMobileMenu}>Womens</Dropdown.Item>
// //               <Dropdown.Item as={Link} to="/kids" onClick={toggleMobileMenu}>Kids</Dropdown.Item>
// //             </Dropdown.Menu>
// //           </Dropdown>
// //         </div>
// //       </nav>

// //       <Modal show={show} onHide={handleClose} centered className="custom-modal">
// //         <Modal.Header closeButton className="modal-header">
// //           <Modal.Title>
// //             <RiAdminFill className="admin-modal-icon" />
// //             Admin Login
// //           </Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body className="modal-body">
// //           <div className="form-group">
// //             <label htmlFor="username">Enter Admin Name:</label>
// //             <input
// //               type="text"
// //               id="username"
// //               placeholder="Enter admin name"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               className="form-input"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="password">Enter Password:</label>
// //             <input
// //               type="password"
// //               id="password"
// //               placeholder="Enter password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="form-input"
// //             />
// //           </div>
// //         </Modal.Body>
// //         <Modal.Footer className="modal-footer">
// //           <Button variant="secondary" onClick={handleClose} className="modal-btn">
// //             Cancel
// //           </Button>
// //           <Button variant="primary" onClick={handleSubmit} className="modal-btn">
// //             Login
// //           </Button>
// //         </Modal.Footer>
// //       </Modal>

// //       {/* Product Cards */}
// //       <div className="carddata">{productCards}</div>

// //       {/* Wishlist Offcanvas */}
// //       <Offcanvas show={showWishlist} onHide={handleCloseWishlist} placement="end">
// //         <Offcanvas.Header closeButton>
// //           <Offcanvas.Title>Wishlist</Offcanvas.Title>
// //         </Offcanvas.Header>
// //         <Offcanvas.Body>{wishlistItems}</Offcanvas.Body>
// //       </Offcanvas>
// //     </>
// //   );
// // };

// // export default Nav;

// import logo from "../images/logo.png";
// import { RiAdminFill } from "react-icons/ri";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaHeart, FaBars } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import axios from "axios";
// import { message } from "antd";
// import { useNavigate, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addTocard } from "../cardslice";
// import Card from "react-bootstrap/Card";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Dropdown from "react-bootstrap/Dropdown";
// import "../css/Nav.css";

// const Nav = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [myPro, setMyPro] = useState("");
//   const [myData, setMyData] = useState([]);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showSearchResults, setShowSearchResults] = useState(false);

//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const [showWishlist, setShowWishlist] = useState(false);

//   const CardData = useSelector((state) => state.mycard.card);
//   const CardData1 = useSelector((state) => state.mywishlist.card);

//   const cardLength = CardData.length;
//   const cardLength1 = CardData1.length;

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const handleCloseWishlist = () => setShowWishlist(false);

//   const handleSubmit = () => {
//     const api = "http://localhost:8000/adminuser/usercheck";
//     axios
//       .post(api, { user: username, password })
//       .then((res) => {
//         if (res.status === 200) {
//           message.success("You are successfully logged in");
//           navigate("/admindashboard");
//           handleClose();
//         } else {
//           message.error("Login failed");
//         }
//       })
//       .catch((error) => {
//         message.error("An error occurred. Please try again.");
//         console.error("Login error:", error);
//       });
//   };

//   const handleSearch = () => {
//     let api = `http://localhost:8000/product/productsearch/?product=${myPro}`;
//     axios.get(api).then((res) => {
//       setMyData(res.data);
//       setShowSearchResults(true);
//       console.log(res.data);
//     });
//   };

//   const handleBack = () => {
//     setShowSearchResults(false);
//     setMyData([]);
//     setMyPro("");
//   };

//   const dispatch = useDispatch();

//   const addToCardData = (id, name, desc, cate, price, img) => {
//     dispatch(
//       addTocard({
//         id,
//         name,
//         description: desc,
//         category: cate,
//         price,
//         image: img,
//         qnty: 1,
//       })
//     );
//   };

//   const productCards = myData.map((key) => (
//     <Card key={key._id} className="product-card">
//       <a href="#" onClick={() => navigate(`/productdetail/${key._id}`)}>
//         <Card.Img variant="top" src={key.image} className="product-image" />
//       </a>
//       <Card.Body>
//         <Card.Title>
//           <span className="brand-tag">{key.brandname}</span>
//           <br />
//           <span className="product-name">{key.name}</span>
//         </Card.Title>
//         <Card.Text>
//           <span className="product-description">{key.description}</span>
//           <br />
//           <span className="product-price">Price: {key.price}</span>
//           <br />
//           <span className="product-category">
//             {key.category} {key.sportscategory}
//           </span>
//           <br />
//           <Button
//             variant="primary"
//             className="add-to-cart-btn"
//             onClick={() =>
//               addToCardData(
//                 key._id,
//                 key.name,
//                 key.description,
//                 key.category,
//                 key.price,
//                 key.image
//               )
//             }
//           >
//             Add to Cart
//           </Button>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   ));

//   const wishlistItems = CardData1.map((key) => (
//     <tr key={key._id}>
//       <td>
//         <img
//           src={key.image}
//           style={{ width: "100px", height: "100px" }}
//           alt={key.name}
//         />
//       </td>
//       <td>{key.name}</td>
//       <td>{key.description}</td>
//       <td>{key.category}</td>
//       <td>{key.price}</td>
//       <td>
//         <Button onClick={() => dispatch(dataRemove(key.id))}>Delete</Button>
//       </td>
//     </tr>
//   ));

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-left">
//           <div className="category-toggle" onClick={toggleMobileMenu}>
//             <FaBars /> <span>ALL SPORTS</span>
//           </div>
//           <div className="brand-logo">
//             <img src={logo} alt="Logo" className="logo" />
//           </div>
//         </div>

//         <div className="navbar-center">
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search for products..."
//               value={myPro}
//               onChange={(e) => setMyPro(e.target.value)}
//               className="search-input"
//             />
//             <IoMdSearch className="search-icon" onClick={handleSearch} />
//           </div>
//         </div>

//         <div className="navbar-right">
//           <div className="user-icons">
//             <div className="icon-container">
//               <Link to="/signin" className="icon-link">
//                 <span className="icon-label">Sign In</span>
//               </Link>
//             </div>
//             <div className="icon-container">
//               <Link to="/mystore" className="icon-link">
//                 <span className="icon-label">My Store</span>
//               </Link>
//             </div>
//             <div className="icon-container">
//               <Link to="/support" className="icon-link">
//                 <span className="icon-label">Support</span>
//               </Link>
//             </div>
//             <div className="admin-section" onClick={handleShow}>
//               <RiAdminFill className="admin-icon" />
//             </div>
//             <div className="icon-container">
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setShowWishlist(true);
//                 }}
//                 className="icon-link"
//               >
//                 <FaHeart className="icon" />
//                 <span className="icon-label">Wishlist</span>
//                 {cardLength1 > 0 && (
//                   <span className="cart-count">{cardLength1}</span>
//                 )}
//               </a>
//             </div>
//             <div className="icon-container">
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   navigate("/carddata");
//                 }}
//                 className="icon-link"
//               >
//                 <FaCartShopping className="icon" />
//                 <span className="icon-label">Cart</span>
//                 {cardLength > 0 && (
//                   <span className="cart-count">{cardLength}</span>
//                 )}
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="hamburger-menu" onClick={toggleMobileMenu}>
//           <FaBars />
//         </div>

//         <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
//           {/* Mobile menu items remain the same */}
//           <Link to="/home" onClick={toggleMobileMenu}>Home</Link>
//           <Link to="/searchdata" onClick={toggleMobileMenu}>Search</Link>
//           <Link to="/shopproduct" onClick={toggleMobileMenu}>Shopproduct</Link>
//           <Link to="/cricket" onClick={toggleMobileMenu}>Cricket</Link>
//           <Link to="/football" onClick={toggleMobileMenu}>Football</Link>
//           <Link to="/racket" onClick={toggleMobileMenu}>Racket</Link>
//           <Link to="/swimming" onClick={toggleMobileMenu}>Swimming</Link>
//           <Link to="/fitness" onClick={toggleMobileMenu}>Fitness</Link>

//           <Dropdown className="mobile-dropdown">
//             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
//               Other Sports
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 1</Dropdown.Item>
//               <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 2</Dropdown.Item>
//               <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 3</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>

//           <Dropdown className="mobile-dropdown">
//             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
//               Top Brands
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item as={Link} to="/topbrands" onClick={toggleMobileMenu}>Brand 1</Dropdown.Item>
//               <Dropdown.Item as={Link} to="/topbrands" onClick={toggleMobileMenu}>Brand 2</Dropdown.Item>
//               <Dropdown.Item as={Link} to="/topbrands" onClick={toggleMobileMenu}>Brand 3</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>

//           <Dropdown className="mobile-dropdown">
//             <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
//               Category
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item as={Link} to="/mens" onClick={toggleMobileMenu}>Mens</Dropdown.Item>
//               <Dropdown.Item as={Link} to="/womens" onClick={toggleMobileMenu}>Womens</Dropdown.Item>
//               <Dropdown.Item as={Link} to="/kids" onClick={toggleMobileMenu}>Kids</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </nav>

//       {/* Search Results Modal */}
//       <Modal
//         show={showSearchResults}
//         onHide={handleBack}
//         size="lg"
//         centered
//         className="search-results-modal"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Search Results</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {myData.length > 0 ? (
//             <div className="carddata">{productCards}</div>
//           ) : (
//             <p>No results found</p>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleBack}>
//             Back
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Admin Login Modal */}
//       <Modal show={show} onHide={handleClose} centered className="custom-modal">
//         {/* Admin modal content remains the same */}
//         <Modal.Header closeButton className="modal-header">
//           <Modal.Title>
//             <RiAdminFill className="admin-modal-icon" />
//             Admin Login
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="modal-body">
//           <div className="form-group">
//             <label htmlFor="username">Enter Admin Name:</label>
//             <input
//               type="text"
//               id="username"
//               placeholder="Enter admin name"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Enter Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-input"
//             />
//           </div>
//         </Modal.Body>
//         <Modal.Footer className="modal-footer">
//           <Button variant="secondary" onClick={handleClose} className="modal-btn">
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleSubmit} className="modal-btn">
//             Login
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Wishlist Offcanvas */}
//       <Offcanvas show={showWishlist} onHide={handleCloseWishlist} placement="end">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Wishlist</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>{wishlistItems}</Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default Nav;

import logo from "../images/logo.png";
import { RiAdminFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart, FaBars } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { message } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTocard } from "../cardslice";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/Nav.css";

const Nav = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [myPro, setMyPro] = useState("");
  const [myData, setMyData] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const CardData = useSelector((state) => state.mycard.card);
  const CardData1 = useSelector((state) => state.mywishlist.card);

  const cardLength = CardData.length;
  const cardLength1 = CardData1.length;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseWishlist = () => setShowWishlist(false);

  const handleSubmit = () => {
    const api = "https://sports-ecommerce-website.onrender.com/adminuser/usercheck";
    axios
      .post(api, { user: username, password })
      .then((res) => {
        if (res.status === 200) {
          message.success("You are successfully logged in");
          navigate("/admindashboard");
          handleClose();
        } else {
          message.error("Login failed");
        }
      })
      .catch((error) => {
        message.error("An error occurred. Please try again.");
        console.error("Login error:", error);
      });
  };

  const handleSearch = () => {
    let api = `https://sports-ecommerce-website.onrender.com/product/productsearch/?product=${myPro}`;
    axios.get(api).then((res) => {
      setMyData(res.data);
      setShowSearchResults(true);
    });
  };

  const handleBack = () => {
    setShowSearchResults(false);
    setMyData([]);
    setMyPro("");
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

  const productCards = myData.map((key) => (
    <Card key={key._id} className="product-card">
      <a href="#" onClick={() => navigate(`/productdetail/${key._id}`)}>
        <Card.Img variant="top" src={key.image} className="product-image" />
      </a>
      <Card.Body>
        <Card.Title>
          <span className="brand-tag">{key.brandname}</span>
          <br />
          <span className="product-name">{key.name}</span>
        </Card.Title>
        <Card.Text>
          <span className="product-description">{key.description}</span>
          <br />
          <span className="product-price">Price: {key.price}</span>
          <br />
          <span className="product-category">
            {key.category} {key.sportscategory}
          </span>
          <br />
          <Button
            variant="primary"
            className="add-to-cart-btn"
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

  const wishlistItems = CardData1.map((key) => (
    <tr key={key._id}>
      <td>
        <img
          src={key.image}
          style={{ width: "100px", height: "100px" }}
          alt={key.name}
        />
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left"  style={{marginLeft:"40px"}}>
          <div className="category-toggle" onClick={toggleMobileMenu}  style={{color:"black"}}>
            <FaBars /> <span className="sports">ALL</span>
          </div>
          <div className="brand-logo">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>

        <div className="navbar-center">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products..."
              value={myPro}
              onChange={(e) => setMyPro(e.target.value)}
              className="search-input"
            />
            <IoMdSearch className="search-icon" onClick={handleSearch} />
          </div>
        </div>

        <div className="navbar-right"  style={{marginRight:"40px"}}>
          <div className="user-icons">
            
            
            <div className="admin-section" onClick={handleShow}>
              <RiAdminFill className="admin-icon" />
              <span className="admin-label"></span>
            </div>
            <div className="icon-container">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowWishlist(true);
                }}
                className="icon-link"
              >
                <FaHeart className="icon" />
                <span className="icon-label">Wishlist</span>
                {cardLength1 > 0 && (
                  <span className="cart-count">{cardLength1}</span>
                )}
              </a>
            </div>
            <div className="icon-container">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/carddata");
                }}
                className="icon-link"
              >
                <FaCartShopping className="icon" />
                <span className="icon-label">Cart</span>
                {cardLength > 0 && (
                  <span className="cart-count">{cardLength}</span>
                )}
              </a>
            </div>
          </div>
        </div>

      

        <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <Link to="/home" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/searchdata" onClick={toggleMobileMenu}>Search</Link>
          <Link to="/shopproduct" onClick={toggleMobileMenu}>Shopproduct</Link>
          <Link to="/cricket" onClick={toggleMobileMenu}>Cricket</Link>
          <Link to="/football" onClick={toggleMobileMenu}>Football</Link>
          <Link to="/racket" onClick={toggleMobileMenu}>Racket</Link>
          <Link to="/swimming" onClick={toggleMobileMenu}>Swimming</Link>
          <Link to="/fitness" onClick={toggleMobileMenu}>Fitness</Link>

          <Dropdown className="mobile-dropdown">
            <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
              Other Sports
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 1</Dropdown.Item>
              <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 2</Dropdown.Item>
              <Dropdown.Item as={Link} to="/othersports" onClick={toggleMobileMenu}>Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          

          <Dropdown className="mobile-dropdown">
            <Dropdown.Toggle variant="secondary" onClick={(e) => e.preventDefault()}>
              Category
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/mens" onClick={toggleMobileMenu}>Mens</Dropdown.Item>
              <Dropdown.Item as={Link} to="/womens" onClick={toggleMobileMenu}>Womens</Dropdown.Item>
              <Dropdown.Item as={Link} to="/kids" onClick={toggleMobileMenu}>Kids</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>

      <Modal
        show={showSearchResults}
        onHide={handleBack}
        size="lg"
        centered
        className="search-results-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {myData.length > 0 ? (
            <div className="carddata">{productCards}</div>
          ) : (
            <p>No results found</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBack}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose} centered className="custom-modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>
            <RiAdminFill className="admin-modal-icon" />
            Admin Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="form-group">
            <label htmlFor="username">Enter Admin Name: admin</label>
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
            <label htmlFor="password">Enter Password: admin12345</label>
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
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} className="modal-btn">
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      <Offcanvas show={showWishlist} onHide={handleCloseWishlist} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Wishlist</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{wishlistItems}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Nav;