import React, { useEffect, useState } from 'react';
import classes from './Complete.module.scss';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../../../components/Global/Button/Button.jsx';
const Complete = () => {
  const location = useParams();
  const history = useHistory();
  const [orderId, setOrderId] = useState('');
  useEffect(() => {
    const { id } = location;
    setOrderId(id);
  }, [location]);
  return (
    <div className={classes.completeLayout}>
      <h2>感謝您的訂購， 我們將會盡快為您送達商品!</h2>
      <p>
        您的訂單編號為: <span>{orderId}</span>
      </p>
      <div
        onClick={() => history.push(`/my/purchase/unpaid`)}
        className={classes.orderVerificationBtn}
      >
        <Button text="前往查看訂單" />
      </div>
    </div>
  );
};

export default Complete;
