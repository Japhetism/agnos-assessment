import Communication from './communication';
import config from '../config';

const ProductsService = {
  fetchProducts(dispatch: any) {
    dispatch({
      type: 'LOAD_PRODUCTS',
      payload: null,
    });
    Communication.getMethod(`${config.endpoints.questions}`).then((products) => {
      dispatch({
        type: 'FETCH_PRODUCTS',
        payload: products,
      });
    })
      .catch(() => {
        dispatch({
          type: 'ERROR_PRODUCTS',
          payload: null,
        });
      })
      .finally(() => {

      });
  },
};

export default ProductsService;
