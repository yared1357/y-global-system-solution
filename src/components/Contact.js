import React, { useState } from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    return (
        <div className="container">
            <div className="frame">
                <iframe 
                    title="Contact Form"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31524.66191018823!2d38.704367274316404!3d9.01048630000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85da18e1b723%3A0x42d08092ca9eea40!2sMexico%20Square!5e0!3m2!1sen!2set!4v1734155171306!5m2!1sen!2set" 
                    style={{ border: 0, width: '100%', height: '500px' }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div className="contact">
                <div className="contact-content">
                    <h2>Need help?</h2>
                    <h3>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> 
                        Address: Addis Ababa, Ethiopia
                    </h3>
                    <h3>
                        <FontAwesomeIcon icon={faPhone} /> 
                        Phone: <a href="tel:+251926862255">+251 926862255</a>
                    </h3>
                    <h3>
                        <FontAwesomeIcon icon={faEnvelope} /> 
                        Email: <a href="mailto:yared123@gmail.com">yared123@gmail.com</a>
                    </h3>
                </div>

                <div className="contact-container">
                    <h2>Contact Me!</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;