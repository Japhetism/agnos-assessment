const intiialState = {
    user: [],
    loading: true,
    error: false,
  };
  
  const authenticationReducer = (state = intiialState, action: any) => {
    switch (action.type) {
      case 'LOAD_USER':
        return {
          ...state,
          user: [],
          error: false,
          loading: true,
        };
      case 'FETCH_USER':
        return {
          ...state,
          users: action.payload,
          error: false,
          loading: false,
        };
      case 'ERROR_USER':
        return {
          ...state,
          user: [],
          error: true,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default authenticationReducer;
  