import axios from 'axios';
import config from '../config';

const Communication = {
  getMethod(endpoint: any) {
    return axios.get(config.baseUrl + endpoint)
      .then((response) => response.data);
  },
};

export default Communication;
