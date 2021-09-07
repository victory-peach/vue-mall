import axios from '../axiosConfig';

export default {
  getProduct() {
    return axios.get('/products/all');
  },
  addProduct(data) {
    console.log(data);
    return axios.post('/products/add', {
      data,
    },
    {
      headers: {
        'content-type': 'application/json',
      },
    });
  },
  delProduct(id) {
    return axios.delete(`/products/${id}`);
  },
  editProduct(id) {
    return axios.get(`/products/${id}`);
  },
  updateProduct(id, data) {
    return axios.put('/products/edit', { id, data });
  },
};
