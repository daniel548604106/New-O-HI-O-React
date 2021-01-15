import React from 'react';
import Login from './Login';
import Signup from './Signup';
const index = () => {
  return (
    <div style={{ maxWidth: '600px', width: '100%', display: 'block' }}>
      <Login />
      <Signup />
    </div>
  );
};

export default index;
