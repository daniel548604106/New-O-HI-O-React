import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { apiGetAllOrders } from '../../../../api/index';
import notify from '../../../../lib/notification';
import Button from '../../../Global/Button/Button.jsx';
import classes from './Purchase.module.scss';

const Purchase = () => {
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const [tabColor, setTabColor] = useState('black');
  const [activeTab, setActiveTab] = useState('unpaid');
  const orderTabs = [
    {
      title: 'unpaid',
      id: 1,
    },
    {
      title: 'processing',
      id: 2,
    },
    {
      title: 'shipped',
      id: 3,
    },
    {
      title: 'completed',
      id: 4,
    },
    {
      title: 'canceled',
      id: 5,
    },
  ];

  const checkOrderDetail = (id) => {
    history.push(`${location.pathname}/${id}`);
  };
  const changeTab = (state) => {
    history.push(`/my/purchase/${state}`);
    setActiveTab(state);
  };

  useEffect(() => {
    const color = () => {
      switch (params.state) {
        case 'unpaid':
          return 'red';
        case 'processing':
          return 'green';
        case 'shipped':
          return 'orange';
        case 'completed':
          return '#178fac';
        default:
          return 'black';
      }
    };
    setTabColor(color());
  }, [params]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await apiGetAllOrders();
        setOrders(data.orders);
      } catch (error) {
        notify('很抱歉！好像找不到你的訂單！');
      }
    };
    getOrders();
  }, []);

  return (
    <div>
      <h2>My Orders</h2>
      <ul className={classes.tabs}>
        {orderTabs.map((tab) => (
          <li
            onClick={() => changeTab(tab.title)}
            className={classes.tabTitle}
            style={{
              borderBottom: location.pathname.includes(tab.title) && `4px solid ${tabColor}`,
              color: location.pathname.includes(tab.title) && `${tabColor}`,
            }}
            key={tab._id}
          >
            {tab.title}
            <span>{}</span>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        {orders.length > 0 &&
          orders.map((order) => (
            <div key={order._id} className={classes.container}>
              <div className={classes.orderId}>
                <p>
                  訂單編號: <span>{order._id}</span>
                </p>
                <div className={classes.time}>
                  <p>
                    訂單成立時間： <span>{order.createdAt}</span>
                  </p>
                  <p>
                    付款完成時間： <span></span>
                  </p>
                </div>
              </div>
              <div>
                <img
                  className={classes.productImage}
                  src={order.shoppingList[0].product.images[0]}
                  alt=""
                />
                <div className={classes.mainInfo}>
                  <div>
                    <p>付款方式</p>
                    <p>{order.paymentMethod}</p>
                  </div>
                  <div>
                    <p>訂單金額</p>
                    <p>{order.total}</p>
                  </div>
                  <div>
                    <p>商品數量</p>
                    <p>
                      {order.shoppingList.reduce((total, current) => {
                        return total + current.quantity;
                      }, 0)}
                    </p>
                  </div>
                </div>
                <div className={classes.checkButton} onClick={() => checkOrderDetail(order._id)}>
                  <Button text="查看訂單詳細內容" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Purchase;
