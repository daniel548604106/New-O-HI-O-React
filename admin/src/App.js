import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Nav.jsx';
import Menu from './components/Menu.jsx';
import Users from './pages/Users.jsx';
import Products from './pages/Products/Products.jsx';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="flex ">
        <Menu />
        <Switch>
          <main className="flex-1 p-10px">
            <Route path="/admin/users">
              <Users />
            </Route>
            <Route path="/admin/products">
              <Products />
            </Route>
          </main>
        </Switch>
      </div>
      {/* <Navbar /> */}
    </BrowserRouter>
  );
}

export default App;
