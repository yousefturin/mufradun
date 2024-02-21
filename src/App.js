import React from 'react';

function App() {
  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    padding: '20px',
  };

  const sectionStyle = {
    marginBottom: '30px',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '20px',
  };

  const h2Style = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  };

  const pStyle = {
    marginBottom: '15px',
    color: '#666',
    textAlign: 'justify',
  };

  const emailStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '30px' }}>Privacy Policy for Mufradun</h1>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Introduction</h2>
        <p style={pStyle}>Welcome to Mufradun. At Mufradun, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines the principles governing the collection, use, and protection of user data within the Mufradun mobile application (referred to herein as the "Service").</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Data Collection and Usage</h2>
        <p style={pStyle}>We prioritize user privacy and transparency at Mufradun. Rest assured, we do not gather any personal information from our users beyond what is strictly necessary for the functionality of our Service. The Service operates on a model where all data is locally stored on the user's device, ensuring maximum privacy and security.</p>
        <p style={pStyle}>The only data we receive from users are their latitude and longitude coordinates. These coordinates are exclusively employed to facilitate location-based functionalities within the application, such as retrieving prayer timings and calculating the direction of the Qibla. It's important to note that these coordinates are neither stored nor transmitted to external servers or third parties.</p>
        <p style={pStyle}>Additionally, Mufradun may access external APIs to deliver specific features, such as presenting locally stored data in JSON format and providing prayer timings. Any data procured from external sources remains confined within the application and is not shared or stored beyond its operational scope.</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Data Security Measures</h2>
        <p style={pStyle}>We employ robust security measures to safeguard all data processed within the Mufradun application. User data is stored locally on their respective devices, with stringent protocols in place to prevent unauthorized access or data breaches. Our team is dedicated to ensuring the highest level of security standards to protect your information.</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Changes to This Policy</h2>
        <p style={pStyle}>Mufradun reserves the right to update this Privacy Policy as necessary to reflect changes in our practices, technological advancements, and legal requirements. We encourage users to periodically review this policy for any updates. By continuing to use the Service, users implicitly agree to any revisions made to this policy.</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={h2Style}>Contact Us</h2>
        <p style={pStyle}>If you have any inquiries, concerns, or suggestions regarding our Privacy Policy or the practices outlined herein, please don't hesitate to reach out to us at <a href="mailto:Mufradun@gmail.com" style={emailStyle}>contact@mufradun.com</a>. Your privacy and satisfaction are paramount to us, and we are committed to addressing any questions or feedback promptly and thoroughly.</p>
      </div>
    </div>
  );
}

export default App;
