import React from 'react';

import Button from '../../../../Global/Button/Button.jsx';
import Reminder from '../../../../Global/Reminder/Reminder.jsx';
import classes from './About.module.scss';
const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <Reminder
        title="Reminder"
        text="Information provided here will be on your public profile. For your own safety, please do not provide any sensitive information."
      />
      <form className={classes.aboutMeForm} action="">
        <label htmlFor="">Write something about yourself</label>
        <textarea />
        <label htmlFor="">Blog</label>
        <input type="text" />
        <label htmlFor="">Website</label>
        <input type="text" />
      </form>
      <Button text="Save" />
    </div>
  );
};

export default About;
