import React from 'react';
import { Grid } from '@material-ui/core';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        height: '100%',
        padding: '50px 15px 100px 15px',
        marginTop: '50px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{ color: 'white', display: 'flex', width: '20%', justifyContent: 'space-between' }}
        >
          <div>
            <h3>Company</h3>
            <p>About Us</p>
            <p>Blog</p>
            <p>Support</p>
          </div>
          <div>
            <h3>Connect</h3>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
        <h2 style={{ color: 'white' }}>O.Hi.O</h2>
      </div>
    </div>
  );
};

export default Footer;
