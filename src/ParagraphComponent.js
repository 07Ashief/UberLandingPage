import React from 'react';

const ParagraphComponent = () => {
  const paragraphStyle = {
    color: 'gray',
    fontSize: '13px',
    textAlign: 'left',
    marginTop: '10px' 
  };

  const linkStyle = {
    color: 'black'
  };

  return (
    <p style={paragraphStyle}>
      By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided. This site is protected by reCAPTCHA and the Google{' '}
      <a href="https://www.google.com/" style={linkStyle}>Privacy Policy</a> and{' '}
      <a href="https://www.google.com/" style={linkStyle}>Terms of Service</a> apply.
    </p>
  );
};

export default ParagraphComponent;
