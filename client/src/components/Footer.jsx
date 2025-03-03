import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about-us">
          <h4>ABOUT US</h4>
          <ul>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/affiliate-program">Affiliate Program</Link></li>
            <li><Link to="/wholesale-program">Wholesale Program</Link></li>
            <li><Link to="/press-inquiries">Press Inquiries</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Customer Support Section */}
        <div className="footer-section customer-support">
          <h4>CUSTOMER SUPPORT</h4>
          <ul>
            <li><Link to="/returns-exchanges">Returns & Exchanges</Link></li>
            <li><Link to="/shipping-information">Shipping Information</Link></li>
            <li><Link to="/track-order">Track Your Order</Link></li>
            <li><Link to="/help-center">Help Center</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        {/* Connect With Us Section */}
        <div className="footer-section connect-with-us">
          <h4>CONNECT WITH US</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
          <p>Want $20 Off? Sign up for SMS alerts and be the first to know!</p>
          <button className="subscribe-button">Get in the loop!</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="accredited-logo">
          <img src="https://via.placeholder.com/50" alt="Accredited Business" /> {/* Replace with actual logo */}
        </div>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link> |
          <Link to="/terms-conditions">Terms & Conditions</Link> |
          <Link to="/accessibility-statement">Accessibility Statement</Link>
        </div>
        <p className="copyright">
          © 2023 SportsGear Inc. All Rights Reserved. Prices and availability are subject to change.
          <br />Some exclusions may apply, the registered trademark of SportsGear Inc.
        </p>
      </div>
    </footer>
    
  );
};

export default Footer;