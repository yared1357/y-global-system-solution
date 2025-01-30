import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './Footer.css'; // Import your CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <h2>Y-Global Web Solution</h2>
            <p>We provide high-quality web solutions for your business needs. We always strive to satisfy our customers and help their businesses succeed.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/gallery" className="text-white text-decoration-none">Gallery</a></li>
              <li><a href="/service" className="text-white text-decoration-none">Service</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:yared1357@gmail.com" className="text-white">yared1357@gmail.com</a></p>
            <p>Phone: <a href="tel:+251926862255" className="text-white">+251 926-862-255</a></p>
            <p>Address: Ethiopia, Addis Ababa</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <h4>Follow me on social Media!</h4>
            <a href="https://www.facebook.com/profile.php?id=100057756135221" target="_blank" rel="noopener noreferrer" className="text-white mx-2" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="mailto:yared1357@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/yared-alebachewu-84b20b252/" target="_blank" rel="noopener noreferrer" className="text-white mx-2" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom text-center mt-3 border-top pt-3">
          <p>CopyRight &copy; {currentYear} Y-Global System Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;