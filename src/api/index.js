import requests from "./request";

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

import mockRequests from './mockrequest';

export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' });
