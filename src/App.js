import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Ensure this is imported

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#095384',paddingLeft:'30px'}}> {/* Set the background color */}
        <div className="container-fluid">
          <p className="title-font">Y-Global System Solutionss</p>
          <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* Use ms-auto to align to the right */}
              <li className="nav-item">
                <a className="nav-link text-white"  style={{ fontSize: '22px',paddingRight:'40px' }} href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white"  style={{ fontSize: '22px' ,paddingRight:'40px'}} href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ fontSize: '22px' ,paddingRight:'40px'}} href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ fontSize: '22px' ,paddingRight:'40px' }} href="/service">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" style={{ fontSize: '22px' ,paddingRight:'40px'}} href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default App;