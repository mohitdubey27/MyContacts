import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_AUTH_STATE,
} from '../../../constants/actionType';
import axiosInstance from '../../../helpers/axiosInterceptor';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    userName: username,
    password,
    email,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch =>
  onSuccess => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axiosInstance
      .post('auth/register', {
        username,
        first_name,
        last_name,
        email,
        password,
      })
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try again later'},
        });
      });
  };
