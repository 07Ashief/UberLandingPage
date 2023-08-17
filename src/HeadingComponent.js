import React from 'react';

const HeadingComponent = ({ text }) => {
  const headingStyle = {
    fontWeight: 400,
    fontSize: '24px',
    textAlign: 'left',
    marginBottom: '10px'
  };

  return (
    <h5 className="text-left" style={headingStyle}>
      {text}
    </h5>
  );
};

export default HeadingComponent;
