import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import './Slideshow.css'; // Import your CSS file

// Import images
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/slide6.jpg';

const Slideshow = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={slide4} className="d-block w-100" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src={slide5} className="d-block w-100" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={slide6} className="d-block w-100" alt="Slide 6" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slideshow;