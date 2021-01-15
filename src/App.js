import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Backdrop } from '@material-ui/core';
import { Navbar } from './components/index';
import { Home, Shoes, Product } from './pages/index';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginModal } from './store/actions/indexActions';
import LoginModal from './components/Login/index';
const App = () => {
  const dispatch = useDispatch();
  const isLoginModalShow = useSelector((state) => state.login.isLoginModalShow);
  const [open, setOpen] = useState(false);
  const handleClose = (e) => {
    dispatch(closeLoginModal());
  };

  const preventProp = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setOpen(isLoginModalShow);
  }, [isLoginModalShow]);

  return (
    <Router>
      <Navbar />
      {isLoginModalShow}
      <div className="loginModal">
        <Backdrop open={open} onClick={handleClose} style={{ zIndex: 11 }}>
          <div
            onClick={preventProp}
            style={{
              maxWidth: '600px',
              height: '60vh',
              borderRadius: '10px',
              zIndex: 12,
              backgroundColor: '#fff',
            }}
          >
            <form noValidate autoComplete="off">
              <LoginModal />
            </form>
          </div>
        </Backdrop>
      </div>
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shoes" exact>
          <Shoes />
        </Route>
        <Route path={`/products/:id`}>
          <Product />
        </Route>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
