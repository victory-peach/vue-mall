import instance from '../axiosConfig';

export default {
  login(user) {
    return instance.post('/passport/login', user);
  },
};
