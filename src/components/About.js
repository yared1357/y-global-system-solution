import React from 'react';
import yaredPic from '../assets/yared.jpg'; // Import the image

const About = () => {
  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>About Me</h3>
      <div style={contentStyle}>
        <img src={yaredPic} alt="Portrait of Yared" style={imageStyle} /> {/* Use the imported image */}
        <div style={textContainerStyle}>
          <p style={paragraphStyle}>
            I’m Yared Alebachewu, a website developer with a strong background in both front-end and back-end development. I bring a comprehensive approach to every project, ensuring that each website is visually captivating and technically robust.
          </p>
          
          <p style={paragraphStyle}>
            My work is driven by a commitment to delivering high-quality, responsive, and user-friendly websites. In my role, I focus on crafting engaging interfaces that are easy to navigate and visually appealing. My goal is to create seamless user experiences that work beautifully on all devices.
          </p>
          
          <p style={paragraphStyle}>
            On the back-end, I ensure that the technical infrastructure is secure, reliable, and capable of supporting the website's needs, from data management to user authentication. I take pride in understanding the unique goals of each client, offering personalized solutions that align with their brand and vision.
          </p>
        </div>
      </div>
      <div style={missionVisionContainerStyle}>
        <div style={missionStyle}>
          <h4 style={sectionHeadingStyle}>Mission</h4>
          <p style={sectionParagraphStyle}>
            "To empower businesses and individuals by crafting innovative, functional, and visually stunning websites that deliver exceptional user experiences. We are dedicated to leveraging the latest technologies and best practices to create secure, responsive, and scalable web solutions that meet our clients' unique needs. Our mission is to bridge creativity and technology, fostering digital transformations that drive growth, engagement, and success."
          </p>
        </div>
        <div style={visionStyle}>
          <h4 style={sectionHeadingStyle}>Vision</h4>
          <p style={sectionParagraphStyle}>
            "To be a leading force in digital innovation, transforming the online landscape by creating cutting-edge, user-centric websites that set new standards in design, functionality, and performance. We envision a future where every business and individual has access to a powerful, engaging digital presence that seamlessly connects them with their audience. Through continuous learning, adaptation, and collaboration, we strive to make the digital world more accessible, impactful, and inspiring for everyone."
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  width: '90vw', // Set container width to 90% of viewport width
  margin: '0 auto', // Center the container horizontally
  padding: '20px',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  textAlign: 'center',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start', // Align items to the top
  gap: '20px', // Adjusted space between image and text
  flexWrap: 'wrap', // Ensure responsiveness on smaller screens
  justifyContent: 'center',
};

const textContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px', // Space between paragraphs
};

const imageStyle = {
  width: '100%',
  maxWidth: '400px', // Adjust as needed
  height: 'auto',
  borderRadius: '8px',
  flexShrink: 0, // Prevent the image from shrinking
};

const paragraphStyle = {
  fontSize: '1rem',
  lineHeight: '1.6',
  maxWidth: '600px', // Ensure paragraph doesn't stretch too wide
};

const missionVisionContainerStyle = {
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  flexWrap: 'wrap', // Ensure responsiveness
  justifyContent: 'center',
};

const missionStyle = {
  flex: '1',
  minWidth: '300px',
  borderTop: '2px solid #000', // Single line border
  paddingTop: '10px',
};

const visionStyle = {
  flex: '1',
  minWidth: '300px',
  borderTop: '2px solid #000', // Single line border
  paddingTop: '10px',
};

const sectionHeadingStyle = {
  fontSize: '2rem',
  marginBottom: '10px',
};

const sectionParagraphStyle = {
  fontSize: '1rem',
  lineHeight: '1.6',
  maxWidth: '800px', // Ensure paragraph doesn't stretch too wide
  margin: '0 auto',
};

export default About;
