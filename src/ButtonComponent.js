import React from 'react';

const ButtonComponent = ({ label, logo, link }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button className="btn" type="button" style={{ width: '320px', marginTop: '10px', backgroundColor: 'lightgray', color: 'black', border: 'none' }} onClick={handleClick}>
  <img src={logo} alt="Logo" className="btn-logo" style={{ width: '24px', height: '24px', marginRight: '5px' }} />
  {label}
</button>

  );
};

export default ButtonComponent;
