import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Map Section */}
        <div className="my-5">
          <h4 className="text-center">Find Us Here</h4>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.993195138948!2d-89.20013478520356!3d48.45915177929823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3be68f4b2e7e1%3A0x22d7b0f0cc9e8b3c!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1635144828498!5m2!1sen!2set"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="p-5 rounded shadow-sm contact-info">
            <div className="d-flex align-items-center mb-5">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h5 className="info-title">Address</h5>
                <p className="info-text">Ethiopia, Addis Ababa</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-5">
              <FaPhoneAlt className="icon" />
              <div>
                <h5 className="info-title">Call Us</h5>
                <p className="info-text">+251-926-862-255</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FaEnvelope className="icon" />
              <div>
                <h5 className="info-title">Email Us</h5>
                <p className="info-text">yared1357@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-8 col-md-12">
          <div className="p-5 bg-white rounded shadow-sm form-container">
            <form>
              <div className="row mb-4">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="mb-4">
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="mb-4">
                <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary px-5"
                style={{
                  backgroundColor: '#1f7091',
                  border: 'none',
                  color: 'white',
                  padding: '12px 30px',
                  fontSize: '16px',
                  borderRadius: '25px',
                  transition: 'background-color 0.3s, transform 0.3s',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#155a73';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f7091';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;