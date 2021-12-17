import React, { useState } from 'react';

import classes from './FAQ.module.scss';
const FAQ = () => {
  const [active, setActive] = useState('-1');
  const handleChangeActive = (index) => {
    if (index === active) {
      return setActive('-1');
    }
    setActive(index);
  };
  return (
    <div className={classes.faq}>
      <h1>設計館常見問答</h1>
      <div onClick={() => handleChangeActive(0)} className={classes.question}>
        申請設計館後，何時會收到結果通知？如何查詢審核結果？
      </div>
      {active === 0 && (
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
      )}
      <div onClick={() => handleChangeActive(1)} className={classes.question}>
        如何提高設計館審核通過率？
      </div>
      {active === 1 && (
        <p>
          想在眾多設計館申請者中脫穎而出，請在提交申請資料前確認以下要點：
          <br />
          商品呈現出原創精神、品牌風格、優異質感
          <br />
          品牌資訊介紹完整並且附上社群網站
          <br />
          商品照展現出商品特色，同時符合 O.HI.O 商品照規範
        </p>
      )}
      <div onClick={() => handleChangeActive(2)} className={classes.question}>
        收到訂單後的出貨流程是什麼？
      </div>
      {active === 2 && (
        <p>
          確定客人完成訂單付款後，由設計師以自選的物流方式將商品寄至訂單中的收件地址，寄出商品後，於訂單中按下「通知出貨」按鈕，填入物流追蹤號碼、選擇該訂單所使用的物流公司後，即完成出貨流程。
        </p>
      )}
      <div onClick={() => handleChangeActive(3)} className={classes.question}>
        如何參與 O.HI.O 線上行銷活動和線下市集活動？
      </div>
      {active === 3 && (
        <p>
          O.HI.O 的線上行銷活動與線下市集活動，目前僅開放給已加入 O.HI.O
          的品牌設計師報名參加，相關活動資訊將透過 O.HI.O 設計館管理平台和電子郵件進行公告。
          <br />
          O.HI.O 官方活動主題豐富，集客力效果強勁，因此參與 O.HI.O
          官方活動對提升品牌的知名度也非常有助益。
        </p>
      )}
      <div onClick={() => handleChangeActive(4)} className={classes.question}>
        設計館營收的結帳流程是什麼？
      </div>
      {active === 4 && (
        <p>
          營收匯出說明：
          <br />
          每月一號至月底「已付款且已出貨訂單」的營收會於次月十號結算，並於次月二十號（遇假日順延）扣除成交管理費，匯至設計師指定帳戶。匯款後，O.HI.O
          會開立成交管理費電子發票寄送至指定的電子郵件信箱。
          <br />
          為加速匯款速度，匯款業務委託銀行代為處理，於每月匯款時酌收 NT$45
          的匯款手續費；若該月營收扣除 O.HI.O 成交管理費未達 NT$1,000，O.HI.O
          不會匯款，待營收累積超過 NT$1,000 後再一併匯出，以節省匯款手續費。
        </p>
      )}
    </div>
  );
};

export default FAQ;
