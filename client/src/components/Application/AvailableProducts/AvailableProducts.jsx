import React from 'react';
import Card from './Card/Card.jsx';
const AvailableProducts = () => {
  return (
    <div>
      <h2> 哪類商品可在 O.HI.O 開館販售？</h2>
      <p>
        每一個開館申請都將由 O.HI.O 團隊專人進行審核。提交申請前請留意，符合以下四大類的商品，才能於
        O.HI.O 上架販售。
      </p>
      <Card />
    </div>
  );
};

export default AvailableProducts;
