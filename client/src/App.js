import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { Backdrop } from '@material-ui/core';
import allRoutes from './routes/allRoutes.js';

// Icon
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

// Component
import Loader from './components/Global/Loader/Loader.jsx';
import Header from './components/Navbar/Header.jsx';
import MenuDrawer from './components/Navbar/MenuDrawer/MenuDrawer.jsx';
import Footer from './components/Footer/Footer.jsx';
import Chat from './components/Chat/Chat.jsx';
import LoginModal from './components/Login/LoginModal.jsx';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleChat } from './store/chat/chatAction';
import { closeLoginModal, closeMenuDrawer } from './store/index/indexAction';
import { ToastContainer } from 'react-toastify';
import { initGA, PageView } from '../src/lib/googleAnalytics';

import './App.scss';

const App = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const showChat = useSelector((state) => state.chat.showChat);
  const isMenuDrawerOpen = useSelector((state) => state.global.isMenuDrawerOpen);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const isLoginModalShow = useSelector((state) => state.global.isLoginModalShow);

  const hideMainHeader = location.pathname.includes('application');

  const [hideHeader, setHideHeader] = useState(false);

  const handleToggleChat = () => {
    dispatch(toggleChat());
  };

  const handleClose = (e) => {
    dispatch(closeLoginModal());
  };

  useEffect(() => {
    let prevPosition = pageYOffset;
    window.addEventListener('scroll', () => {
      let currentPosition = pageYOffset;
      if (prevPosition > 50 && prevPosition < currentPosition) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      prevPosition = currentPosition;
    });
  }, []);

  useEffect(() => {
    initGA();
    PageView();
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Router history={history}>
        <ToastContainer
          autoClose={3000}
          hideProgressBar={true}
          pauseOnHover
          newestOnTop={false}
          closeOnClick
        />
        <div className={`menuDrawer ${isMenuDrawerOpen ? 'active' : ''}`}>
          <MenuDrawer onClick={() => dispatch(closeMenuDrawer())} />
        </div>
        <div
          className="header"
          style={{ top: hideHeader ? '-100%' : '', display: hideMainHeader ? 'hidden' : 'block' }}
        >
          <Header />
        </div>

        {isUserLoggedIn &&
          (showChat ? (
            <div className="chatRoom">
              <Chat />
            </div>
          ) : (
            <>
              <div onClick={() => handleToggleChat()} style={{ display: 'none' }}>
                <ChatBubbleOutlineIcon />
                <span>聊聊</span>
              </div>
            </>
          ))}
        <div className="loginModal">
          <Backdrop open={isLoginModalShow} onClick={handleClose} style={{ zIndex: 15 }}>
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '600px',
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
        <Switch>
          {allRoutes.map(({ component, exact, path }) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
};

export default App;
