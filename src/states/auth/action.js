import api from '../../config/services/api';
import { setLoadingStatus } from '../loading/action';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
};

const authUserCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const asyncAuthUserLogin = (userdata) => async (dispatch) => {
  try {
    const authUser = await api.login(userdata);
    dispatch(authUserCreator(authUser));
    api.putAccessToken(authUser);

    return authUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

const asyncAuthUserLogout = () => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    await api.logout();
    dispatch(authUserCreator({}));
    api.deleteAccessToken();

    return true;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    dispatch(setLoadingStatus(false));
  }
};

export {
  ActionType,
  authUserCreator,
  asyncAuthUserLogin,
  asyncAuthUserLogout,
};
