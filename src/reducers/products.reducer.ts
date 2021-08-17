const intiialState = {
    products: [],
    loading: true,
    error: false,
  };
  
  const productsReducer = (state = intiialState, action: any) => {
    switch (action.type) {
      case 'LOAD_PRODUCTS':
        return {
          ...state,
          products: [],
          error: false,
          loading: true,
        };
      case 'FETCH_PRODUCTS':
        return {
          ...state,
          products: action.payload,
          error: false,
          loading: false,
        };
      case 'ERROR_PRODUCTS':
        return {
          ...state,
          products: [],
          error: true,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  