import { getUserData } from './userRequest';
export const apiGetUserData = getUserData;

// 使用者登入/註冊

import { postLogin, postSignup, postOAuthLogin, postLogout } from './authRequest';
export const apiPostLogin = postLogin;
export const apiPostSignup = postSignup;
export const apiPostOauthLogin = postOAuthLogin;
export const apiPostLogout = postLogout;

// 產品
import { getAllProducts, getProduct, getCollectionProducts } from './productRequest';
export const apiGetAllProducts = getAllProducts;
export const apiGetProduct = getProduct;
export const apiGetCollectionProducts = getCollectionProducts;

// Banner

import { getBanners } from './bannerRequest';

export const apiGetBanners = getBanners;

// Review

import { getReviews } from './reviewRequest';

export const apiGetReviews = getReviews;

// Favorite
import { getFavList, addToFavorite } from './favoriteRequest';

// export const apiAddFavProduct = addFavProduct;
export const apiAddToFavorite = addToFavorite;
export const apiGetFavList = getFavList;

// Shop

import { getHotShop } from './shopRequest';

export const apiGetHotShop = getHotShop;

// My

import { patchMyData } from './myRequest';
export const apiPatchMyData = patchMyData;
