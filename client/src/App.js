import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import allRoutes from './routes/allRoutes.js';

import './App.scss';

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
import { closeMenuDrawer } from './store/index/indexAction';

// Plugins
import { ToastContainer } from 'react-toastify';
import { initGA, PageView } from '../src/lib/googleAnalytics';

const App = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const showChat = useSelector((state) => state.chat.showChat);
  const isMenuDrawerOpen = useSelector((state) => state.global.isMenuDrawerOpen);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);

  const hideMainHeader = location.pathname.includes('application');

  const [hideHeader, setHideHeader] = useState(false);

  const handleToggleChat = () => {
    dispatch(toggleChat());
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
        <LoginModal />

        {isUserLoggedIn &&
          (showChat ? (
            <div className="chatRoom">
              <Chat />
            </div>
          ) : (
            <div onClick={() => handleToggleChat()} style={{ display: 'none' }}>
              <ChatBubbleOutlineIcon />
              <span>聊聊</span>
            </div>
          ))}

        <div
          className="header"
          style={{ top: hideHeader ? '-100%' : '', display: hideMainHeader ? 'hidden' : 'block' }}
        >
          <Header />
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
