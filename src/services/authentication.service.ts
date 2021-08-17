import Communication from './communication';
import config from '../config';

const AuthenticationService = {
  fetchUser(dispatch: any) {
    dispatch({
      type: 'LOAD_USER',
      payload: null,
    });
    Communication.postMethod(`${config.endpoints.questions}`).then((user) => {
      dispatch({
        type: 'FETCH_USER',
        payload: user,
      });
    })
      .catch(() => {
        dispatch({
          type: 'ERROR_USER',
          payload: null,
        });
      })
      .finally(() => {

      });
  },
};

export default AuthenticationService;
