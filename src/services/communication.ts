import axios from 'axios';
import config from '../config';
import { products } from '../fixtures/products';
import { formatAPIResponse } from '../utils/helper';

const Communication = {
  getMethod(endpoint: any) {
    return Promise.resolve(formatAPIResponse(products));
  },
  postMethod(endpoint: any) {
    return axios.post(config.baseUrl + endpoint)
      .then((response) => response.data);
  },
};

export default Communication;
