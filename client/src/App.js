import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { Backdrop } from '@material-ui/core';
import Header from './components/Navbar/Header.jsx';
import { Home, Product, Search, Cart, Browse, Shop, Favorite, My, OAuth } from './pages/index';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Footer from './components/Footer/Footer.jsx';
import Chat from './components/Chat/Chat.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginModal } from './store/index/indexAction';
import LoginModal from './components/Login/LoginModal.jsx';
import Beauty from './pages/Collection/Beauty/Beauty.jsx';
import Latest from './pages/Latest/Latest.jsx';
import { setUserLoggedIn } from './store/user/userAction';
import { apiGetUserData } from './api/index';
import { ToastContainer } from 'react-toastify';
import { toggleChat } from './store/chat/chatAction';
import './App.scss';
const App = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleToggleChat = () => {
    dispatch(toggleChat());
  };
  const showChat = useSelector((state) => state.chat.showChat);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const isLoginModalShow = useSelector((state) => state.global.isLoginModalShow);
  const [open, setOpen] = useState(false);
  const handleClose = (e) => {
    dispatch(closeLoginModal());
  };

  const preventProp = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    console.log(location);
    const query = window.location.search;
    let userId;
    const getUserData = async () => {
      try {
        const { data } = await apiGetUserData(userId);
        console.log('res', data);
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
      <Header />
      {isUserLoggedIn &&
        (showChat ? (
          <div className="chatRoom">
            <Chat />
          </div>
        ) : (
          <>
            <div onClick={() => handleToggleChat()} className="hideHeader">
              <ChatBubbleOutlineIcon />
              <span>聊聊</span>
            </div>
          </>
        ))}
      {isLoginModalShow}
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
      <div className="mainLayout" style={{ marginTop: '60px' }}>
        <Route path="/" exact>
          <Home />
        </Route>
        <main className="global-container">
          <Route path="/oauth/:type" exact>
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
        <Footer />
      </div>
    </Router>
  );
};

export default App;
