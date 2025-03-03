

import Carousel from "react-bootstrap/Carousel";
import ban1 from "../images/banner1.jpg";
import ban2 from "../images/w4.jpg";
import ban3 from "../images/w5.webp";
import ban4 from "../images/w6.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Shopbycategories from "./Shopbycategories";
import { useDispatch } from "react-redux";
import { addTocard } from "../cardslice";
import { Link, useNavigate } from "react-router-dom";
import ProductModel from "./ProductModel";
import { addTowishlist } from "../wishlistSlice";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Wallpaper from "./Wallpaper";
import CricketGroup from "./CricketGroup";
import TennisGroup from "./TennisGroup";
import WallpaperDown from "./WallpaperDown";
import "../css/home.css";
import Navbar from "../components/Nav";

const Home = () => {
  const [mydata, setmydata] = useState([]);
  const navigate = useNavigate();

  const loaddata = () => {
    let api = "https://sports-ecommerce-website.onrender.com/product/productdisplay";
    axios.get(api).then((res) => {
      setmydata(res.data);
    });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const dispatch = useDispatch();

  const addtocardData = (id, name, desc, cate, price, img) => {
    dispatch(addTocard({ id, name, description: desc, category: cate, price, image: img, qnty: 1 }));
  };

  const addtowishlistData = (id, name, desc, cate, price, img) => {
    dispatch(addTowishlist({ id, name, description: desc, category: cate, price, image: img }));
  };

  const handleShare = (product) => {
    const shareData = {
      title: product.name,
      text: product.description,
      url: `${window.location.origin}/productdetail/${product._id}`,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Share functionality is not supported in this browser.");
    }
  };

  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  const ans = mydata.slice(0, 10).map((key) => (
    <Card
      key={key._id}
      id="card1"
      className="card-container"
      style={{
        width: "100%",
        maxWidth: "250px",
        margin: "10px auto",
        height: "430px",
        position: "relative",
        borderRadius: "10px", // Matching the image's rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
      onMouseEnter={() => handleMouseEnter(key._id)}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#" onClick={() => navigate(`/productdetail/${key._id}`)}>
        <Card.Img
          id="card2"
          variant="top"
          src={key.image}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0", // Top rounded corners
          }}
        />
      </a>
      <Card.Body>
        <div>
          <Card.Title className="card-title">
            <span
              style={{
                color: "white",
                backgroundColor: "#8B4513", // Brown background as in the image
                fontSize: "15px",
                padding: "2px 6px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/productdetail/${key._id}`)}
            >
              {key.brandname}
            </span>
            <span style={{ marginLeft: "10px", color: "#333" }}>Cricket Shoes</span> {/* Example category */}
            <a
              href="#"
              onClick={() =>
                addtowishlistData(
                  key._id,
                  key.name,
                  key.description,
                  key.category,
                  key.price,
                  key.image
                )
              }
            >
              <FaHeart style={{ color: "#FF0000", marginLeft: "10px" }} />
            </a>
            <br />
            <span style={{ fontWeight: "bold", fontSize: "18px", color: "#333" }}>
              {key.name}
            </span>
          </Card.Title>
          <Card.Text className="card-text">
            <span style={{ fontSize: "14px", color: "#555" }}>Price: ${key.price}</span>
            <br />
            <span style={{ fontSize: "12px", color: "#666" }}>
              {key.category} {key.sportscategory}
            </span>
          </Card.Text>
        </div>
        <Button
          variant="primary"
          className="btnn"
          style={{
            width: "100%",
            marginTop: "10px",
            fontWeight: "bold",
            borderRadius: "25px", // Matching the oval button in the image
            backgroundColor: "#007BFF",
            border: "none",
          }}
          onClick={() =>
            addtocardData(
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
      </Card.Body>

      {hoveredCardId === key._id && (
        <div
          className="card-icons"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            position: "absolute",
            top: "10px",
            right: "15px",
            fontSize: "20px",
          }}
        >
          <Link
            onClick={() =>
              addtowishlistData(
                key._id,
                key.name,
                key.description,
                key.category,
                key.price,
                key.image
              )
            }
          >
            <FaHeart style={{ color: "#FF0000", margin: "5px" }} />
          </Link>
          <Link
            onClick={() =>
              addtocardData(
                key._id,
                key.name,
                key.description,
                key.category,
                key.price,
                key.image
              )
            }
          >
            <FaCartShopping style={{ color: "#007BFF", margin: "5px" }} />
          </Link>
          <Link onClick={() => handleShare(key)}>
            <FaShareAlt style={{ color: "#007BFF", margin: "5px" }} />
          </Link>
        </div>
      )}
    </Card>
  ));

  return (
    <>
      
      <Carousel
        className="custom-carousel"
        interval={3000}
        indicators={true}
        controls={true}
      >
        <Carousel.Item>
          <img src={ban1} alt="Slide 1" className="carousel-image" />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Discover our latest collection of sports gear.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ban2} alt="Slide 2" className="carousel-image" />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>High-quality equipment for every athlete.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ban3} alt="Slide 3" className="carousel-image" />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Explore exclusive offers this season.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ban4} alt="Slide 4" className="carousel-image" />
          <Carousel.Caption>
            <h3>Fourth Slide</h3>
            <p>Premium gear designed for performance.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <Shopbycategories />
      </div>

      <h1
        style={{
          textAlign: "center",
          padding: "30px 0",
          fontSize: "2rem",
          color: "#333",
          background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        Featured Products
      </h1>

      <div className="carddata"  style={{display:"flex" ,justifyContent:"space-between",flexWrap:"wrap"}}>
        <div className="cards-wrapper">{ans}</div>
      </div>

     

      <div>
        <CricketGroup />
      </div>

      <div>
        <TennisGroup />
      </div>
    </>
  );
};

export default Home;