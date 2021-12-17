import React from 'react';
const Product = React.lazy(() => import('../pages/Products/_Product/_Product.jsx'));
const Cart = React.lazy(() => import('../pages/Cart/Cart.jsx'));
const Search = React.lazy(() => import('../pages/Search/Search.jsx'));
const Favorite = React.lazy(() => import('../pages/Favorite/Favorite.jsx'));
const Shop = React.lazy(() => import('../pages/Shop/Shop.jsx'));
const Browse = React.lazy(() => import('../pages/Browse/Browse.jsx'));
const My = React.lazy(() => import('../pages/My/My.jsx'));
const Home = React.lazy(() => import('../pages/Home/Home.jsx'));
const OAuth = React.lazy(() => import('../pages/OAuth/OAuth.jsx'));
const Application = React.lazy(() => import('../pages/Application/Application.jsx'));
const Latest = React.lazy(() => import('../pages/Latest/Latest.jsx'));
const Policy = React.lazy(() => import('../pages/Policy/Policy.jsx'));
const About = React.lazy(() => import('../pages/About/About.jsx'));
const Topic = React.lazy(() => import('../pages/Topic/Topic.jsx'));
const Beauty = React.lazy(() => import('../pages/Collection/Beauty/Beauty.jsx'));

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/policy:type?',
    exact: true,
    component: Policy,
  },
  {
    path: '/products/:id',
    exact: true,
    component: Product,
  },
  {
    path: '/oauth/:type',
    exact: true,
    component: OAuth,
  },
  {
    path: '/my/:type?/:state?',
    exact: true,
    component: My,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/browse?',
    exact: true,
    component: Browse,
  },
  {
    path: '/latest',
    exact: true,
    component: Latest,
  },
  {
    path: '/favorite',
    exact: true,
    component: Favorite,
  },
  {
    path: '/shop/:accoun',
    exact: true,
    component: Shop,
  },
  {
    path: '/search',
    exact: true,
    component: Search,
  },
  {
    path: '/search',
    exact: true,
    component: Search,
  },
  {
    path: '/cart/:status?/:id?',
    exact: true,
    component: Cart,
  },
  {
    path: '/beauty',
    exact: true,
    component: Beauty,
  },
  {
    path: '/application',
    exact: true,
    component: Application,
  },
];
