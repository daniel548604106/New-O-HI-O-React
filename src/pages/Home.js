import React from 'react';
import Banner from '../components/Home/Banner/Banner';
import Collection from '../components/Home/Collection/Collection';
import Sale from '../components/Home/Sale/Sale';
import Viewed from '../components/Home/Viewed/Viewed';
const Home = () => {
  return (
    <div>
      <Banner />
      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Collection />
        <Sale />
        <Viewed />
      </main>
    </div>
  );
};

export default Home;
