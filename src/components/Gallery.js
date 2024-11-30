import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// Import images
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';

const Gallery = () => {
  const images = [
    { id: 1, src: gallery1, alt: 'Gallery Image 1' },
    { id: 2, src: gallery2, alt: 'Gallery Image 2' },
    { id: 3, src: gallery3, alt: 'Gallery Image 3' },
    { id: 4, src: gallery4, alt: 'Gallery Image 4' },
    { id: 5, src: gallery5, alt: 'Gallery Image 5' },
    { id: 6, src: gallery6, alt: 'Gallery Image 6' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Prevent closing the modal
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation(); // Prevent closing the modal
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="container my-4">
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {images.map((image) => (
          <div key={image.id} className="col">
            <div className="card h-100" onClick={() => handleImageClick(image)}>
              <img src={image.src} alt={image.alt} className="card-img-top" style={{ objectFit: 'cover', height: '300px' }} />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ModalOverlay onClick={handleClose}>
          <ModalContent>
            <ModalBody>
              <CloseButton onClick={handleClose}>&times;</CloseButton>
              <NavButton onClick={handlePrev} className="prev">
                &lt;
              </NavButton>
              <ModalImage src={selectedImage.src} alt={selectedImage.alt} />
              <NavButton onClick={handleNext} className="next">
                &gt;
              </NavButton>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

// Styled components
const ModalOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1050;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: none;
  background-color: transparent;
`;

const ModalBody = styled.div`
  position: relative;
  width: auto;
  max-width: 90%;
  max-height: 90%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(255, 71, 87, 0.8); /* Opacity added */
  width: 40px; /* Square shape */
  height: 40px; /* Square shape */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1051;

  &:hover {
    background-color: rgba(255, 71, 87, 1); /* Solid color on hover */
  }
`;

const NavButton = styled.button`
  background-color: rgba(0, 123, 255, 0.8); /* Opacity added */
  color: white;
  border: none;
  width: 50px; /* Square shape */
  height: 50px; /* Square shape */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1051;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  &:hover {
    background-color: rgba(0, 123, 255, 1); /* Solid color on hover */
  }
`;

const ModalImage = styled.img`
  max-height: 80vh;
  max-width: 100%;
  object-fit: contain;
  border: 5px solid white;
  border-radius: 10px;
  display: block;
  margin: auto;
`;

export default Gallery;