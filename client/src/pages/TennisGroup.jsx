// import axios from "axios";
// import { useEffect, useState } from "react"
// import { useDispatch } from 'react-redux';
// import { addTocard } from '../cardslice';
// import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import f10 from "../images/f10.jpg"
// import { addTowishlist } from '../wishlistSlice';
// import { FaHeart,FaShareAlt } from "react-icons/fa";
// import { FaCartShopping } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import "../css/CricketGroup.css"


// const TennisGroup=()=>{
//     const [mydata,setmydata] = useState([])
//     const navigate = useNavigate()

//     const loaddata=()=>{
//         let api="http://localhost:8000/product/productsportscategory?sportscategory=tennis";
//         axios.get(api).then((res)=>{
//           setmydata(res.data)
//           console.log(res.data)
//         })
//     }

//     useEffect(()=>{
//         loaddata()
//     },[])

//     const dispatch = useDispatch();
    

//   const addtocardData=(id,name,desc,cate,price,img)=>{
//       dispatch(addTocard({id:id,name:name,description:desc,category:cate,price:price,image:img,qnty:1}))
      
//   }

//   const handleShare = (product) => {
//     const shareData = {
//       title: product.name,
//       text: product.description,
//       url: `${window.location.origin}/productdetail/${product._id}`
//     };
    
//     if (navigator.share) {
//       navigator.share(shareData)
//         .then(() => console.log('Shared successfully'))
//         .catch((error) => console.error('Error sharing:', error));
//     } else {
//       alert('Share functionality is not supported in this browser.');
//     }
//   };

//   const [hoveredCardId, setHoveredCardId] = useState(null);

//   // Handle mouse enter and leave events
//   const handleMouseEnter = (id) => {
//     setHoveredCardId(id);
//   };

//   const handleMouseLeave = () => {
//     setHoveredCardId(null);
//   };

  

//     const ans = mydata.map((key)=>{
//         return(
//           <>
        
//           {/* <Card className="cardbox" style={{width:"250px", marginLeft:"10px",marginRight:"10px",marginBottom:"20px",height:"430px" ,borderRadius:"18px"}}>
//           <a href="#"   onClick={()=>{navigate(`/productdetail/${key._id}`)}}>
//           <Card.Img variant="top" src={key.image}   style={{width:"230px" ,height:"200px",margin:"auto",borderRadius:"18px",marginTop:"15px"}} />
//           </a>
//           <Card.Body>
//             <Card.Title   >
//            <a href="#" >
//            <span style={{color:"white",backgroundColor:"#c24d2c",fontSize:"15px",marginLeft:"10px",width:"50px"}}>{key.brandname  }</span>
//            </a>
//             <br/>
//               <span style={{fontWeight:"bold"}}>{key.name}</span></Card.Title>
//             <Card.Text>
//             <span > {key.description}</span>
             
//               <br/>
//               <h>Price : {key.price}</h>
//               <br/>
//               {key.category}  {key.sportscategory}
//             </Card.Text>
//             <div className="btnn1">
//             <Button variant="primary" className="btnn" style={{width:"200px",height:"40px", color:"white",padding:"8px 12px 8px 12px",fontWeight:"800",fontSize:"18px",borderRadius:"50px"
              
//             }}  onClick={()=>{addtocardData(key._id,key.name,key.description,key.category,key.price,key.image)}}>Add to Cart</Button></div>
//           </Card.Body>
//         </Card>
//            */}


// <Card
//       key={key._id}
//       id="card1"
//       className="card-container"
//       style={{
//         width: "100%",
//         maxWidth: "250px",
//         margin: "10px auto",
//         height: "430px",
//         position: "relative",
//       }}
//       onMouseEnter={() => handleMouseEnter(key._id)}
//       onMouseLeave={handleMouseLeave}
//     >
//       <a href="#" onClick={() => navigate(`/productdetail/${key._id}`)}>
//         <Card.Img
//           id="card2"
//           variant="top"
//           src={key.image}
//           style={{
//             width: "100%",
//             height: "200px",
//             objectFit: "cover",
//             borderRadius: "18px 18px 0 0",
//           }}
//         />
//       </a>
//       <Card.Body>
//         <div>
//           <Card.Title>
//             <span
//               style={{
//                 color: "white",
//                 backgroundColor: "#c24d2c",
//                 fontSize: "15px",
//                 padding: "2px 6px",
//                 borderRadius: "5px",
//               }}
//             >
//               {key.brandname}
//             </span>
//             <br />
//             <span style={{ fontWeight: "bold", fontSize: "18px" }}>
//               {key.name}
//             </span>
//             <a
//               href="#"
//               onClick={() =>
//                 addtowishlistData(
//                   key._id,
//                   key.name,
//                   key.description,
//                   key.category,
//                   key.price,
//                   key.image
//                 )
//               }
//             >
//               <FaHeart style={{ color: "red", marginLeft: "10px" }} />
//             </a>
//           </Card.Title>
//           <Card.Text>
//             <span style={{ fontSize: "11px" }}>{key.description}</span>
//             <br />
//             <strong>Price: ${key.price}</strong>
//             <br />
//             <span>
//               {key.category} {key.sportscategory}
//             </span>
//           </Card.Text>
//         </div>
//         <Button
//           variant="primary"
//           className="btnn"
//           style={{
//             width: "100%",
//             marginTop: "10px",
//             fontWeight: "bold",
//             borderRadius: "50px",
//           }}
//           onClick={() =>
//             addtocardData(
//               key._id,
//               key.name,
//               key.description,
//               key.category,
//               key.price,
//               key.image
//             )
//           }
//         >
//           Add to Cart
//         </Button>
//       </Card.Body>

//       {hoveredCardId === key._id && (
//         <div
//           className="card-icons"
//           style={{
//             display: "flex",
//             justifyContent: "space-evenly",
//             position: "absolute",
//             top: "10px",
//             right: "15px",
//             fontSize: "24px",
//           }}
//         >
//           <Link
//             onClick={() =>
//               addtowishlistData(
//                 key._id,
//                 key.name,
//                 key.description,
//                 key.category,
//                 key.price,
//                 key.image
//               )
//             }
//           >
//             <FaHeart style={{ color: "red", margin: "5px" }} />
//           </Link>
//           <Link
//             onClick={() =>
//               addtocardData(
//                 key._id,
//                 key.name,
//                 key.description,
//                 key.category,
//                 key.price,
//                 key.image
//               )
//             }
//           >
//             <FaCartShopping style={{ color: "blue", margin: "5px" }} />
//           </Link>
//           <Link onClick={() => handleShare(key)}>
//             <FaShareAlt style={{ color: "blue", margin: "5px" }} />
//           </Link>
//         </div>
//       )}
//     </Card>
         
//           </>
//         )
//       })

//     return(
//         <>
        
//           <h4
//           style={{
//             fontSize: "24px", // Large font size
//             fontWeight: "bold", // Bold text
//             color: "black", // Eye-catching color
//             textAlign: "center", // Center alignment
//             textTransform: "uppercase", // Make text uppercase
//             letterSpacing: "2px", // Add spacing between letters
//             marginBottom: "20px", // Add spacing below the heading
//             position: "relative", // For the bottom border
//             display: "inline-block", // Ensure the border aligns with the text
//           }}
//         >
//          Your Ultimate Tennis Shop
//           <span
//             style={{
//               display: "block", // Display the bottom border as a block
//               width: "60%", // Border width relative to text
//               height: "4px", // Thickness of the border
//               backgroundColor: "#FF4500", // Vibrant orange color for contrast
//               margin: "8px auto 0 auto", // Center the border and add spacing
//               borderRadius: "2px", // Rounded corners for the border
//             }}
//           ></span>
//         </h4>
        
//                <div  id="res"  style={{display:"flex",justifyContent:"space-between"}}>
//                {/* <img src={f9}  style={{width:"550px",height:"440px"}}/> */}
//                <div className="image-container">
//               <img
//                 src={f10}
//                 alt="Shining Image"
//                 className="shining-image" style={{width:"550px",height:"440px"}} // Apply the class for the shine effect
//               />
//             </div>
//                {ans}
//                </div>
        
//         </>
//     )
// }

// export default TennisGroup;

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTocard } from "../cardslice";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import f10 from "../images/f10.jpg";
import { addTowishlist } from "../wishlistSlice";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../css/CricketGroup.css"; // Reusing the CSS file

const TennisGroup = () => {
  const [mydata, setmydata] = useState([]);
  const navigate = useNavigate();

  const loaddata = () => {
    let api = "https://sports-ecommerce-website.onrender.com/product/productsportscategory?sportscategory=tennis";
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
          src={key.image || f10} // Fallback image if key.image is undefined
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
      <h4 className="section-heading">Your Ultimate Tennis Shop</h4>

      <div id="res" className="content-wrapper">
        <div className="image-container">
          <img src={f10} alt="Shining Image" className="shining-image" />
        </div>
        <div className="cards-container">
          <div className="cards-slider">{ans}</div>
        </div>
      </div>
    </>
  );
};

export default TennisGroup;