

// import { useNavigate } from "react-router-dom";
// import f1 from "../images/f1.jpg";
// import f2 from "../images/f2.jpg";
// import f3 from "../images/f3.jpg";
// import f4 from "../images/f4.jpg";
// import f5 from "../images/f5.jpg";
// import f6 from "../images/f6.jpg";
// import f7 from "../images/f7.jpg";
// import f8 from "../images/f8.jpg";
// import "../css/shopbycategories.css"; // Import the CSS file

// const Shopbycategories = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="shop-by-categories-container">
//       <h1 className="shop-by-categories-heading">
//         SHOP BY CATEGORIES
//         <span className="heading-underline"></span>
//       </h1>

//       <div className="categories-grid">
//         <div className="category-item" onClick={() => navigate("/football")}>
//           <img src={f1} alt="Footballs" />
//           <h5>Footballs</h5>
//         </div>

//         <div className="category-item" onClick={() => navigate("/squash")}>
//           <img src={f2} alt="Squash" />
//           <h5>Squash</h5>
//         </div>

//         <div className="category-item" onClick={() => navigate("/pingpong")}>
//           <img src={f3} alt="Ping Pong" />
//           <h5>Ping Pong</h5>
//         </div>

//         <div className="category-item" onClick={() => navigate("/basketball")}>
//           <img src={f4} alt="BasketBall" />
//           <h5>BasketBall</h5>
//         </div>

//         <div className="category-item" onClick={() => navigate("/tennis")}>
//           <img src={f5} alt="Tennis" />
//           <h5>Tennis</h5>
//         </div>

//         <div className="category-item" onClick={() => navigate("/football")}>
//           <img src={f6} alt="Football" />
//           <h5>Football</h5>
//         </div>

//         <div className="category-item" onClick={() => navigate("/carrom")}>
//           <img src={f7} alt="Carrom" />
//           <h5>Carrom</h5>
//         </div>

//         <div className="category-item" onClick={() => navigate("/volleyball")}>
//           <img src={f8} alt="VolleyBall" />
//           <h5>VolleyBall</h5>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shopbycategories;


import { useNavigate } from "react-router-dom";
import f1 from "../images/f1.jpg";
import f2 from "../images/f2.jpg";
import f3 from "../images/f3.jpg";
import f4 from "../images/f4.jpg";
import f5 from "../images/f5.jpg";
import f6 from "../images/f6.jpg";
import f7 from "../images/f7.jpg";
import f8 from "../images/f8.jpg";
import "../css/shopbycategories.css"; // Import the CSS file

const Shopbycategories = () => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-categories-container">
      <h1 className="shop-by-categories-heading">
        SHOP BY CATEGORIES
        <span className="heading-underline"></span>
      </h1>

      <div className="categories-grid">
        <div className="category-item" onClick={() => navigate("/football")}>
          <img src={f1} alt="Footballs" />
          <h5>Footballs</h5>
        </div>

        <div className="category-item" onClick={() => navigate("/racket")}>
          <img src={f2} alt="Squash" />
          <h5>Squash</h5>
        </div>

        <div className="category-item" onClick={() => navigate("/football")}>
          <img src={f3} alt="Ping Pong" />
          <h5>Ping Pong</h5>
        </div>

        <div className="category-item" onClick={() => navigate("/fitness")}>
          <img src={f4} alt="BasketBall" />
          <h5>BasketBall</h5>
        </div>

        <div className="category-item" onClick={() => navigate("/tennis")}>
          <img src={f5} alt="Tennis" />
          <h5>Tennis</h5>
        </div>

        <div className="category-item" onClick={() => navigate("/football")}>
          <img src={f6} alt="Football" />
          <h5>Football</h5>
        </div>

        <div className="category-item" onClick={() => navigate("/football")}>
          <img src={f7} alt="Carrom" />
          <h5>Carrom</h5>
        </div>

        <div className="category-item" onClick={() => navigate("/football")}>
          <img src={f8} alt="VolleyBall" />
          <h5>VolleyBall</h5>
        </div>
      </div>
    </div>
  );
};

export default Shopbycategories;