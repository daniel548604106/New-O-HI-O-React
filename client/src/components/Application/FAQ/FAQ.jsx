import React from 'react';
import classes from './FAQ.module.scss';
const FAQ = () => {
  return (
    <div className={classes.faq}>
      <h1>設計館常見問答</h1>
      <div className={classes.question}>申請設計館後，何時會收到結果通知？如何查詢審核結果？</div>
      <p>
        為了維護設計館一致且良好的品質，你的設計館申請資料將由 O.HI.O 團隊進行審核，並於 10
        個工作天（不含假日）左右發出結果通知。
        <br />
        若你的申請通過審核，O.HI.O 會直接寄出開館通知信。
        <br />
        未通過審核，仍會收到結果通知，請重新審視你的商品是否符合 O.HI.O 商品販售政策。
        <br />
        別忘了在信箱搜尋「O.HI.O」，查看上述通知信是否跑到垃圾信件夾。
        <br />
        若超過 10
        個工作天（不含假日）仍未收到通知，可來信「聯絡我們」提供以下資料（缺一不可），以便我們查詢結果，謝謝你的耐心等候。
        <br />
        申請人姓名
        <br />
        設計館帳號（應為小寫英文字母或數字，且非個人帳號）
        <br />
        Email 信箱
        <br />
        備註：提供之資料必須與申請表單中填寫的資料相符才能進行查詢。
      </p>
    </div>
  );
};

export default FAQ;
