import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/index';
import { Home, Shoes } from './pages/index';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/shoes" exact>
        <Shoes />
      </Route>
    </Router>
  );
};

export default App;
