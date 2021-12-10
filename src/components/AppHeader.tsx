import { left } from '@popperjs/core';
import React from 'react';

const AppHeader = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        background: 'grey',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/dmv-wallpaper-grey.png)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              height: '20px',
              background: 'linear-gradient(#000000, #ffffff00)',
            }}
          ></div>
          <img
            src={`./website_header_text.svg`}
            alt="The Blacklist DMV text"
            width={300}
            style={{ background: '#000000', borderRadius: '0px 0px 20px 20px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
