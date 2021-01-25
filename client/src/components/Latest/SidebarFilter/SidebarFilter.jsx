import React, { useState } from 'react';
import styles from './SidebarFilter.module.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
const selections = [
  {
    title: 'category',
    options: [
      'All',
      'Accessories',
      'Bags',
      'Beauty',
      ' Coat & Jackets',
      'Dresses',
      'Fine Jewelry',
      'Jeans',
      'Lingerie',
    ],
  },
  {
    title: 'gender',
    options: ['women', 'men'],
  },
];

const SidebarFilter = () => {
  const [categorySelected, setCategorySelected] = useState(0);
  const [genderSelected, setGenderSelected] = useState(0);
  return (
    <div className={styles.container}>
      {selections.map((selection) => (
        <div key={selection.title} className={styles.section}>
          <div className={styles.layout}>
            <p className={styles.header}>{selection.title}</p>
            <ExpandLessIcon className={styles.icon} />
          </div>
          {selection.options.map((option, idx) => (
            <div
              key={option}
              className={styles.selections}
              style={{
                maxHeight: selection.title === 'category' ? '250px' : '',
                overflow: selection.title === 'category' && 'auto',
              }}
            >
              {selection.title === 'gender' && (
                <input
                  type="radio"
                  value={genderSelected}
                  onChange={() => setGenderSelected(idx)}
                  checked={genderSelected === idx}
                  className={styles.radioBtn}
                />
              )}
              <p
                onClick={() => selection.title === 'category' && setCategorySelected(idx)}
                className={(styles.option, selection.title === 'category' && styles.clickable)}
                style={{
                  fontWeight:
                    selection.title === 'category' && categorySelected === idx ? 'bold' : 'medium',
                  color: categorySelected === idx && 'black',
                }}
              >
                {option}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SidebarFilter;
