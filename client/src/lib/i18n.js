import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: 'Login',
      newRelease: "What's New",
      hotShop: 'Hot Shop',
      popularItems: 'Popular Items',
      joinNow: 'Join Now',
      campaignTitle: '5% OFF your first purchase',
      campaignContent: 'Join O.HI.O today, and receive 5% off your first order.Limited to 72 hours',
      seeMore: 'See More',
      editorPicks: 'Editor Picks',
      discountedItems: 'Discounted Items',
      productDescription: 'Product Description',
      tags: 'Tags',
      evaluation: 'Evaluation',
      recommendedItems: 'Recommended For You',
    },
  },
  tw: {
    translation: {
      login: '登入/註冊',
      newRelease: '新品上架',
      hotShop: '每日新星',
      popularItems: '最近熱門',
      joinNow: '逛逛去',
      editorPicks: '編輯嚴選',
      campaignTitle: '立即加入會員，享有首購優惠！',
      campaignContent: '把握現在擁有質感好設計！立即加入會員，享有95折首購優惠',
      seeMore: '看更多',
      discountedItems: '精選優惠',
      productDescription: '商品介紹',
      tags: '商品標籤',
      evaluation: '購買評價',
      recommendedItems: '專屬推薦',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'tw',
    fallbackLng: 'en',
    // Allowed languages
    supportedLngs: ['en', 'tw'],
    keySeparator: false, // we do not use keys in form messages.welcome
  });

export default i18n;
