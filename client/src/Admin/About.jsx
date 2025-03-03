import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "../css/about.css"; // Import the CSS file

const About = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="footer-content">
          {/* About Us Section */}
          <Col xs={12} md={3}>
            <h5 className="footer-heading">About Us</h5>
            <p>
              At YourStore, we deliver top-quality products at unbeatable prices. 
              Your satisfaction is our priority. Join us for an incredible shopping experience.
            </p>
          </Col>
          {/* Customer Service Section */}
          <Col xs={12} md={3}>
            <h5 className="footer-heading">Customer Service</h5>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
            </ul>
          </Col>
          {/* Quick Links Section */}
          <Col xs={12} md={3}>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </Col>
          {/* Stay Connected Section */}
          <Col xs={12} md={3}>
            <h5 className="footer-heading">Stay Connected</h5>
            <Form className="newsletter-form">
              <Form.Control type="email" placeholder="Enter your email" />
              <Button variant="primary" className="newsletter-btn">Subscribe</Button>
            </Form>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaGithub /></a>
            </div>
          </Col>
        </Row>
        {/* Footer Bottom Section */}
        <Row className="footer-bottom">
          <Col xs={12} className="text-center">
            <p className="footer-copy">
              © 2025 YourStore | All Rights Reserved | Designed with ❤️
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default About;
