import React from 'react';

import Button from '../../Global/Button/Button.jsx';
import classes from './CTA.module.scss';

const CTA = () => {
  return (
    <div className={classes.ctaLayout}>
      <h2>現在就申請加入 O.HI.O 吧！</h2>
      <p>
        馬上開始填寫申請表，加入這些優秀設計品牌的行列，和 O.HI.O 一起為你的品牌開啓新的歷程吧！
      </p>
      <Button text="我要開設 O.HI.O 館" />
    </div>
  );
};

export default CTA;
