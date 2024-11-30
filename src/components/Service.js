import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'I develop the best websites for every purpose, ranging from personal websites to organizational websites. I can help bring your vision to life, making your services accessible to everyone around the world. Contact me to enhance your professionalism and make your quality internationally recognized.',
    icon: '🌐',
  },
  {
    id: 2,
    title: 'Graphic Designing',
    description: 'I design the best graphics for your organization to advertise your business. Please contact me for all your graphic design needs. I can help make your business competitive by creating stunning graphics.',
    icon: '🎨',
  },
  {
    id: 3,
    title: 'Photo Editing',
    description: 'Y-Global Web Solutions offers top-notch photo editing services. Our skilled graphic designers use industry-leading tools to enhance, retouch, and optimize your photographs. Trust us to ensure your photos make a powerful impact, whether for products, editorials, or any other purpose.',
    icon: '🖼️',
  },
  {
    id: 4,
    title: 'Video Editing',
    description: 'Y-Global Web Solutions offers top-tier video editing services to help elevate your promotional efforts. Our skilled editors use the latest tools and techniques to transform raw footage into polished, impactful content that captivates audiences.',
    icon: '🎥',
  },
  {
    id: 5,
    title: 'Logo Designing',
    description: 'I create logos for every organization to express your brand in an attractive way by using very expressive pictorial and textual expressions. Please contact me for your logo design needs.',
    icon: '🖌️',
  },
  {
    id: 6,
    title: 'Giving Programming Courses',
    description: 'I offer programming courses in languages like C++, Java, HTML, CSS, JavaScript, PHP, and more. Contact me for simplified and comprehensive programming courses.',
    icon: '💻',
  },
];

const Service = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map(service => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <div style={iconStyle}>{service.icon}</div>
                <h5 className="card-title font-weight-bold">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const iconStyle = {
  fontSize: '40px',
  marginBottom: '10px',
};

export default Service;