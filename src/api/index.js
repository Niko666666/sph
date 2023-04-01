import requests from "./request";

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

import mockRequests from './mockrequest';

export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' });

export const reqFloorList = () => mockRequests({ url: '/floor', method: 'get' });

export const reqGetSearchInfo = (params) => requests({
  url: "/list",
  method: "post",
  data: params,
})