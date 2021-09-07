import axios from '../axiosConfig';

export default {
  getCitems() {
    return axios.get('/category/all');
  },
};
