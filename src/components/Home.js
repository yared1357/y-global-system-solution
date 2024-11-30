import React from 'react';
import Slideshow from './Slideshow'; // Correct import path
import './Home.css'; // Ensure you have a CSS file for styling
import heroImage from '../assets/hero-image.png'; // Add your image path

const Home = () => {
  return (
    <div className="home-container">
      <Slideshow /> {/* Add the slideshow here */}

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={heroImage} alt="Web Development" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h1 className="display-4">Welcome to Y-Global Web Solution</h1>
            <p className="lead">We are very eager to make your dream a reality. We are well-known for developing highly responsive and fully functional websites for our customers. If you have any idea, we are ready to bring your ideas to life.</p>
            <p>At Y-Global, we specialize in delivering high-quality web development and design services tailored to meet your unique needs.</p>
            <p>From responsive web design to custom application development, our team of experts is dedicated to bringing your vision to life.</p>
            <div className="button-group mt-4">
            <a 
  href="/about" 
  className="btn me-3" 
  style={{
    backgroundColor: '#1f7091', // Customize this color
    color: 'white', // Customize text color
    border: 'none', // Remove border if needed
  }}
>
  Learn More
</a>
<a 
  href="/contact" 
  className="btn" 
  style={{
    backgroundColor: '#1f7091', // Customize this color
    color: 'white', // Customize text color
    border: 'none', // Remove border if needed
  }}
>
  Get in Touch
</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;