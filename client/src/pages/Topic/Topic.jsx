import React from 'react';
import classes from './Topic.module.scss';
// import { useLocation } from 'react-router-dom';
import Hero from '../../components/Topic/Hero/Hero.jsx';
const Topic = () => {
  // const location = useLocation();

  return (
    <div className={classes.topicContainer}>
      <Hero />
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
      <div>Topic</div>
    </div>
  );
};

export default Topic;
