import Communication from './communication';
import config from '../config';

const QuestionsService = {
  fetchQuestions(dispatch: any) {
    dispatch({
      type: 'LOAD_QUESTIONS',
      payload: null,
    });
    Communication.getMethod(`${config.endpoints.questions}`).then((questions) => {
      dispatch({
        type: 'FETCH_QUESTIONS',
        payload: questions,
      });
    })
      .catch(() => {
        dispatch({
          type: 'ERROR_QUESTIONS',
          payload: null,
        });
      })
      .finally(() => {

      });
  },
};

export default QuestionsService;
