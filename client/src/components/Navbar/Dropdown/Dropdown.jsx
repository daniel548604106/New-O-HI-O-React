import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.scss';
import { useDispatch } from 'react-redux';
import { setUserLogout } from '../../../store/user/userAction';
const Dropdown = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setUserLogout());
  };
  return (
    <div style={{ position: 'relative' }}>
      <div className="arrow"></div>
      <div
        style={{
          backgroundColor: 'white',
          padding: '15px',
          boxShadow: '1px 1px 1px #ada9a9',
          display: 'flex',
          borderRadius: '4px',
          flexDirection: 'column',
        }}
      >
        {<Link to={'checkout'}>Checkout</Link>}
        <span onClick={() => logout()} className="logout">
          登出
        </span>
      </div>
    </div>
  );
};

export default Dropdown;
