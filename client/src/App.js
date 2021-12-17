import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { Backdrop } from '@material-ui/core';
import allRoutes from './routes/allRoutes.js';
import Header from './components/Navbar/Header.jsx';
import Loader from './components/Global/Loader/Loader.jsx';
import ScrollToTop from './components/Global/ScrollToTop/ScrollToTop.jsx';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Footer from './components/Footer/Footer.jsx';
import Chat from './components/Chat/Chat.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginModal, closeMenuDrawer } from './store/index/indexAction';
import LoginModal from './components/Login/LoginModal.jsx';
import { ToastContainer } from 'react-toastify';
import { toggleChat } from './store/chat/chatAction';
import MenuDrawer from './components/Navbar/MenuDrawer/MenuDrawer.jsx';
import { initGA, PageView } from '../src/lib/googleAnalytics';
import './App.scss';
const App = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleToggleChat = () => {
    dispatch(toggleChat());
  };
  const [hideMainHeader, setHideMainHeader] = useState(false);
  const isMenuDrawerOpen = useSelector((state) => state.global.isMenuDrawerOpen);
  const showChat = useSelector((state) => state.chat.showChat);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const isLoginModalShow = useSelector((state) => state.global.isLoginModalShow);
  const [open, setOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const handleClose = (e) => {
    dispatch(closeLoginModal());
  };

  useEffect(() => {
    location.pathname.includes('application') ? setHideMainHeader(true) : setHideMainHeader(false);
  }, [location]);

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

  const preventProp = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    initGA();
    PageView();
  }, []);

  useEffect(() => {
    dispatch(closeMenuDrawer());
  }, [dispatch, location]);

  useEffect(() => {
    setOpen(isLoginModalShow);
  }, [isLoginModalShow]);

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

        <div
          onClick={() => dispatch(closeMenuDrawer())}
          className={`menuDrawer ${isMenuDrawerOpen ? 'active' : ''}`}
        >
          <MenuDrawer />
        </div>

        {!hideMainHeader && (
          <div className="header" style={{ top: hideHeader ? '-100%' : '' }}>
            <Header />
          </div>
        )}

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
          <Backdrop open={open} onClick={handleClose} style={{ zIndex: 15 }}>
            <div
              onClick={preventProp}
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
        <ScrollToTop />
        <Switch>
          <>
            {allRoutes.map(({ component, exact, path }) => (
              <Route key={path} path={path} component={component} exact={exact} />
            ))}
          </>
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
};

export default App;
