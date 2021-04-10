import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { Backdrop } from '@material-ui/core';
import Header from './components/Navbar/Header.jsx';
import { Home, Product, Search, Cart, Browse, Shop, Favorite, My, OAuth } from './pages/index';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Footer from './components/Footer/Footer.jsx';
import Chat from './components/Chat/Chat.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginModal, closeMenuDrawer } from './store/index/indexAction';
import LoginModal from './components/Login/LoginModal.jsx';
import Beauty from './pages/Collection/Beauty/Beauty.jsx';
import Latest from './pages/Latest/Latest.jsx';
import Application from './pages/Application/Application.jsx';
import { setUserLoggedIn } from './store/user/userAction';
import { apiGetUserData } from './api/index';
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
    const query = window.location.search;
    let userId;
    const getUserData = async () => {
      try {
        const { data } = await apiGetUserData(userId);
        dispatch(setUserLoggedIn(data.user));
      } catch (error) {
        console.log(error);
      }
    };
    if (query) {
      userId = query.split('=')[1];
      getUserData();
    }
  }, []);

  useEffect(() => {
    dispatch(closeMenuDrawer());
  }, [location]);
  useEffect(() => {
    setOpen(isLoginModalShow);
  }, [isLoginModalShow]);

  return (
    <Router history={history}>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover
        newestOnTop={false}
        closeOnClick
      />
      {isMenuDrawerOpen && (
        <div onClick={() => dispatch(closeMenuDrawer())} className="menuDrawer">
          <MenuDrawer />
        </div>
      )}
      {!hideMainHeader && (
        <div className="header" style={{ top: hideHeader && '-100%' }}>
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
      <div className={!hideMainHeader && 'mainLayout'}>
        <Route path="/" exact>
          <Home />
        </Route>
        <main className={!hideMainHeader && 'global-container'}>
          <Route path={`/oauth/:type`}>
            <OAuth props={props} />
          </Route>
          <Route path={`/my/:type?/:state?`}>
            <My />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/latest" exact>
            <Latest />
          </Route>
          <Route path={`/products/:id`}>
            <Product />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path={`/shop/:account`}>
            <Shop />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/cart/:status?/:id?">
            <Cart />
          </Route>
          <Route path="/beauty">
            <Beauty />
          </Route>
        </main>
        <Route path="/application">
          <Application />
        </Route>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
