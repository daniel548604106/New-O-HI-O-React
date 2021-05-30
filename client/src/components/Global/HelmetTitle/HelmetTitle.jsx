import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
const HelmetTitle = ({ title, description, image }) => {
  const defaultTitle = 'O.HI.O | 亞洲領先設計購物網站 | Design the way you are';
  const defaultDescription =
    'O.HI.O 設計品牌衣著服飾每日上架，海內外最新設計師品牌每日上架，精選商品免運天天有，首購即享特殊優惠，尋找獨特日常穿搭就在 O.HI.O 。';
  const defaultImage = 'https://cdn01.pinkoi.com/product/ZD5QQsTg/0/800x0.jpg';
  return (
    <div>
      <Helmet>
        <title>{title ? `${title} | O.HI.O` : defaultTitle}</title>
        <meta name="description" content={description ? description : defaultDescription} />
        <meta name="keywords" content="O.HI.O 買設計 文創 客製化 禮物" />
        <meta property="og:title" content={title ? `${title} | O.HI.O` : defaultTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description ? description : defaultDescription} />
        <meta property="og:url" content="https://www.pinkoi.com/browse" />
        <meta property="og:image" content={image ? image : defaultImage} />
        <meta property="fb:app_id" content="4937468222991458" />
      </Helmet>
    </div>
  );
};

HelmetTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default HelmetTitle;
