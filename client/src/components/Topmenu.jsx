


import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaBars } from "react-icons/fa";
// import "../css/topmenu.css"; // Link the CSS for styling

const Topmenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Navigation Menu */}
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="home">Home</Link>
        <Link to="searchdata">Search</Link>
        <Link to="shopproduct">Shopproduct</Link>
        <Link to="cricket">Cricket</Link>
        <Link to="football">Football</Link>
        <Link to="racket">Racket</Link>
        <Link to="swimming">Swimming</Link>
        <Link to="fitness">Fitness</Link>
        

        {/* Dropdowns */}
        <Dropdown className="dropdown">
          <Dropdown.Toggle>Other Sports</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="othersports">Action 1</Dropdown.Item>
            <Dropdown.Item as={Link} to="othersports">Action 2</Dropdown.Item>
            <Dropdown.Item as={Link} to="othersports">Action 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="dropdown">
          <Dropdown.Toggle>Top Brands</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="topbrands">Brand 1</Dropdown.Item>
            <Dropdown.Item as={Link} to="topbrands">Brand 2</Dropdown.Item>
            <Dropdown.Item as={Link} to="topbrands">Brand 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="dropdown">
          <Dropdown.Toggle>Category</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="mens">Mens</Dropdown.Item>
            <Dropdown.Item as={Link} to="womens">Womens</Dropdown.Item>
            <Dropdown.Item as={Link} to="kids">Kids</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Topmenu;
