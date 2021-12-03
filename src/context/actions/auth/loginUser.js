import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../../../constants/actionType';
import axiosInstance from '../../../helpers/axiosInterceptor';

export default ({userName: username, password}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post('auth/login', {
        username,
        password,
      })
      .then(res => {
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try again later'},
        });
      });
  };
