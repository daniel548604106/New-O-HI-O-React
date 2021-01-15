import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/index';
import { Home, Shoes, Product } from './pages/index';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
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
