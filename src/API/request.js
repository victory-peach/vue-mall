import axios from 'axios';
import baseURL, { URLS } from './URL';

const Axios = axios.create({
  baseURL,
});
Axios.interceptors.response.use((res) => res.data);
const requestSide = function (type) {
  return Axios.get(URLS.getSide, {
    params: {
      type,
    },
  });
};
const requestGoods = function (type, page, size, sort, category) {
  console.log(type, page, size, sort);
  return Axios.get(URLS.getGoodsList, {
    params: {
      type,
      page,
      size,
      sort,
      category,
    },
  });
};
const requestLikesearch = function (value) {
  return Axios.get(URLS.likeSearch, {
    params: {
      likeValue: value,
    },
  });
};
const requestSearch = function (type, page, size) {
  return Axios.get(URLS.search, {
    params: {
      type,
      page,
      size,
    },
  });
};
const requestId = function (value) {
  return Axios.get(URLS.getGoodsByIds, {
    params: {
      value,
    },
  });
};
export default {
  requestSide,
  requestGoods,
  requestLikesearch,
  requestSearch,
  requestId,
};
