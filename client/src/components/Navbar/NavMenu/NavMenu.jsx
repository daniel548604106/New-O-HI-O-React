import React from 'react';
import classes from './NavMenu.module.scss';
import { menuOptions } from '../../../lib/menuOptions';
import { useHistory } from 'react-router-dom';
const NavMenu = () => {
  const history = useHistory();

  const proceedToBrowse = (id) => {
    if (id === 0) return history.push(`/browse`);
    history.push(`/browse?category=${id}`);
  };
  return (
    <div className={classes.navMenuLayout}>
      <div className={classes.navMenu}>
        {menuOptions.map((option, idx) => (
          <div key={option.id}>
            <h1
              style={{ color: idx === 0 && '#eb7f82', cursor: idx === 0 ? 'auto' : 'pointer' }}
              onClick={() => proceedToBrowse(option.id)}
              className={classes.title}
            >
              {option.title}
            </h1>
            <div className={classes.navList}>
              <ul>
                {option.category.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
