import React from 'react';

const Price = () => {
  return (
    <div>
      <p>金額</p>
      <ul>
        <li>
          <input type="radio" checked />
          <span> NT$ 300 以下</span>
        </li>
        <li>
          <input type="radio" />
          <span> NT$ 300 - 500</span>
        </li>
        <li>
          <input type="radio" />
          <span> NT$ 500 - 1000</span>
        </li>
        <li>
          <input type="radio" />
          <span> NT$ 1000 - 2000</span>
        </li>
        <li>
          <input type="radio" />
          <span> NT$ 2000 - 3000</span>
        </li>
        <li>
          <input type="radio" />
          <span> NT$ 3000 以上</span>
        </li>
      </ul>
    </div>
  );
};

export default Price;
