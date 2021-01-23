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
