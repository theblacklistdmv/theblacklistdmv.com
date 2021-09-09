import React from 'react';

const AppHeader = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={`./website_header_text.svg`}
          alt="The Blacklist DMV text"
          width={300}
        />
      </div>
    </div>
  );
};

export default AppHeader;
