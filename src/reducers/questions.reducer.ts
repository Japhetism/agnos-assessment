const intiialState = {
  questions: [],
  loading: true,
  error: false,
};

const questionsReducer = (state = intiialState, action: any) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS':
      return {
        ...state,
        questions: [],
        error: false,
        loading: true,
      };
    case 'FETCH_QUESTIONS':
      return {
        ...state,
        questions: action.payload,
        error: false,
        loading: false,
      };
    case 'ERROR_QUESTIONS':
      return {
        ...state,
        questions: [],
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default questionsReducer;
