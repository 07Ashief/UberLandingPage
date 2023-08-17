import React from 'react';

const LineComponent = () => {
  return (
    <div className="text-center">
      <h1 className="font-family-sans-serif m-1 text-success" style={{ fontSize: '18px', maxWidth: '600px', position: 'relative', fontWeight: 300, color: 'gray' }}>
        or
        <span className="d-block gray" style={{ width: '140px', height: '1.5px', position: 'absolute', left: '0px', top: '60%', marginLeft: '-4px', backgroundColor: 'gray' }}></span>
        <span className="d-block gray" style={{ width: '140px', height: '1.5px', position: 'absolute', right: '0', top: '60%', marginRight: '-4px', backgroundColor: 'gray' }}></span>
      </h1>
    </div>
  );
}

export default LineComponent;
