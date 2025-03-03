

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTocard } from "../cardslice";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import f9 from "../images/f9.jpg";
import { addTowishlist } from "../wishlistSlice";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../css/CricketGroup.css"; // Import the external CSS file

const CricketGroup = () => {
  const [mydata, setmydata] = useState([]);
  const navigate = useNavigate();

  const loaddata = () => {
    let api = "https://sports-ecommerce-website.onrender.com/product/productsportscategory?sportscategory=cricket";
    axios.get(api).then((res) => {
      setmydata(res.data);
      console.log(res.data);
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

  const ans = mydata.slice(0, 3).map((key) => (
    <Card
      key={key._id}
      id="card1"
      className="card-container"
      onMouseEnter={() => handleMouseEnter(key._id)}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#" onClick={() => navigate(`/productdetail/${key._id}`)}>
        <Card.Img
          id="card2"
          variant="top"
          src={key.image || f9} // Fallback image if key.image is undefined
          className="card-image"
        />
      </a>
      <Card.Body>
        <div>
          <Card.Title className="card-title">
            <span className="brand-name" onClick={() => navigate(`/productdetail/${key._id}`)}>
              {key.brandname}
            </span>
            <br />
            <span className="product-name">{key.name}</span>
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
              <FaHeart className="wishlist-icon" />
            </a>
          </Card.Title>
          <Card.Text className="card-text">
            <span>{key.description}</span>
            <br />
            <strong>Price: ${key.price}</strong>
            <br />
            <span>
              {key.category} {key.sportscategory}
            </span>
          </Card.Text>
        </div>
        <Button
          variant="primary"
          className="btnn"
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
        <div className="card-icons">
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
            <FaHeart className="icon-heart" />
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
            <FaCartShopping className="icon-cart" />
          </Link>
          <Link onClick={() => handleShare(key)}>
            <FaShareAlt className="icon-share" />
          </Link>
        </div>
      )}
    </Card>
  ));

  return (
    <>
      <h4 className="section-heading">Your Ultimate Cricket Shop</h4>

      <div id="res" className="content-wrapper">
        <div className="image-container">
          <img src={f9} alt="Shining Image" className="shining-image" />
        </div>
        <div className="cards-container">
          <div className="cards-slider">{ans}</div>
        </div>
      </div>
    </>
  );
};

export default CricketGroup;