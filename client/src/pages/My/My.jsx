import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Purchase from '../../components/My/Content/Purchase/Purchase.jsx';
import Refund from '../../components/My/Content/Refund/Refund.jsx';
import Sidebar from '../../components/My/Sidebar/SideBar.jsx';
import classes from './My.module.scss';
import Setting from './Setting/Setting.jsx';
const My = () => {
  const params = useParams();
  useEffect(() => {}, []);
  return (
    <div className={classes.myLayout}>
      <div className={classes.mySidebar}>
        <Sidebar />
      </div>
      <div className={classes.myContent}>
        {params.type === 'setting' && <Setting />}
        {params.type === 'purchase' && <Purchase />}
        {params.type === 'refund' && <Refund />}
      </div>
    </div>
  );
};

export default My;
